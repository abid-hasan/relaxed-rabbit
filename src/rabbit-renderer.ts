import rabbitTexture from '../assets/plates/rabbit-breath-key.webp';

// A small, fixed mesh keeps the feet grounded while chest, hands and head breathe.
// Chroma-keying happens in the fragment shader: the source texture is not RGBA.
const vertexSource = `
attribute vec2 aPoint;
uniform float uBreath;
varying vec2 vUv;
float region(vec2 p, vec2 center, vec2 radius) {
  vec2 d = (p - center) / radius;
  return exp(-dot(d, d) * 2.0);
}
void main() {
  vUv = aPoint;
  vec2 p = aPoint;
  float feet = max(region(p, vec2(.42,.83), vec2(.17,.23)),
                   region(p, vec2(.78,.81), vec2(.15,.23)));
  float torso = region(p, vec2(.52,.71), vec2(.29,.27)) * (1.0-feet);
  float hands = region(p, vec2(.55,.57), vec2(.23,.18));
  float head = region(p, vec2(.48,.40), vec2(.35,.37));
  float ears = region(p, vec2(.36,.19), vec2(.25,.28));
  p.x += uBreath * ((p.x-.52)*.48*torso + .008*ears);
  p.y -= uBreath * (.060*torso + .032*hands + .025*head + .008*ears);
  p = p*.90 + .05;
  gl_Position = vec4(p.x*2.0-1.0, 1.0-p.y*2.0, 0.0, 1.0);
}`;
const fragmentSource = `
precision mediump float;
uniform sampler2D uTexture;
varying vec2 vUv;
void main() {
  vec4 c = texture2D(uTexture, vUv);
  float spill = min(c.r,c.b)-c.g;
  float alpha = 1.0-smoothstep(.12,.55,spill);
  if (spill > .08) c.b = min(c.b,c.g+.06);
  gl_FragColor = vec4(c.rgb*alpha,alpha);
}`;

export async function createRabbitRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: true });
  if (!gl) throw new Error('WebGL unavailable');
  const compile = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error('Shader unavailable');
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      throw new Error('Shader compilation failed');
    }
    return shader;
  };
  const program = gl.createProgram();
  if (!program) throw new Error('Program unavailable');
  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Link failed');
  gl.useProgram(program);

  const points: number[] = [];
  const indices: number[] = [];
  const columns = 36;
  const rows = 42;
  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= columns; x++) points.push(x / columns, y / rows);
  }
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      const a = y * (columns + 1) + x;
      indices.push(a, a + 1, a + columns + 1, a + 1, a + columns + 2, a + columns + 1);
    }
  }
  const pointBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, pointBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW);
  const location = gl.getAttribLocation(program, 'aPoint');
  gl.enableVertexAttribArray(location);
  gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  const image = new Image();
  image.src = rabbitTexture;
  await image.decode();
  if (gl.isContextLost()) throw new Error('Context lost while loading');
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.uniform1i(gl.getUniformLocation(program, 'uTexture'), 0);
  const breathLocation = gl.getUniformLocation(program, 'uBreath');
  let amount = 0;
  const draw = (value = amount) => {
    amount = value;
    if (gl.isContextLost()) return;
    const size = Math.max(1, Math.min(1100, Math.round(canvas.clientWidth * Math.min(devicePixelRatio || 1, 1.75))));
    if (canvas.width !== size || canvas.height !== size) canvas.width = canvas.height = size;
    gl.viewport(0, 0, size, size);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(breathLocation, amount);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
  };
  const resize = new ResizeObserver(() => draw());
  resize.observe(canvas);
  draw();
  return {
    draw,
    destroy() {
      resize.disconnect();
      gl.deleteTexture(texture);
      gl.deleteBuffer(pointBuffer);
      gl.deleteBuffer(indexBuffer);
      gl.deleteProgram(program);
    },
  };
}
