import gsap from 'gsap';
import { createRabbitRenderer } from './rabbit-renderer';

export function setupBreathing(media: MediaQueryList) {
  const section = document.querySelector<HTMLElement>('#pause')!;
  const canvas = document.querySelector<HTMLCanvasElement>('#breathing-rabbit')!;
  const start = document.querySelector<HTMLButtonElement>('#breath-start')!;
  const stop = document.querySelector<HTMLButtonElement>('#breath-stop')!;
  const status = document.querySelector<HTMLElement>('#breath-status')!;
  const detail = document.querySelector<HTMLElement>('#breath-detail')!;
  const instruction = document.querySelector<HTMLElement>('#breath-instruction')!;
  const progress = document.querySelector<HTMLElement>('.breath-meter span')!;
  let renderer: Awaited<ReturnType<typeof createRabbitRenderer>> | undefined;
  let cycle: gsap.core.Timeline | undefined;
  let active = false;
  let loading = true;
  const pose = { amount: 0 };

  function updateInstruction() {
    instruction.textContent = media.matches || !renderer
      ? 'Follow “Breathe in” and “Breathe out” at your own pace. One round takes about 10 seconds.'
      : 'Breathe in as the rabbit rises. Breathe out as it settles. One round takes about 10 seconds.';
  }
  function finish(completed = false) {
    cycle?.kill();
    cycle = undefined;
    active = false;
    pose.amount = 0;
    renderer?.draw(0);
    progress.style.transform = 'scaleX(0)';
    section.style.setProperty('--breath', '0');
    section.dataset.breath = completed ? 'done' : 'ready';
    const returnFocus = document.activeElement === stop;
    start.hidden = false;
    stop.hidden = true;
    start.textContent = completed ? 'Breathe again' : 'Start breathing';
    status.textContent = completed ? 'All done.' : 'Ready when you are.';
    detail.textContent = completed ? 'Go at your own pace.' : 'Press Start to take one slow breath.';
    if (returnFocus) start.focus({ preventScroll: true });
  }
  function draw() {
    renderer?.draw(media.matches ? 0 : pose.amount);
    section.style.setProperty('--breath', String(media.matches ? 0 : pose.amount));
    progress.style.transform = `scaleX(${media.matches ? 0 : pose.amount})`;
  }
  function fallback() {
    renderer?.destroy();
    renderer = undefined;
    section.dataset.renderer = 'unavailable';
    canvas.hidden = true;
    updateInstruction();
    if (active) finish();
  }
  createRabbitRenderer(canvas).then(value => {
    renderer = value;
    section.dataset.renderer = 'ready';
    updateInstruction();
  }).catch(fallback).finally(() => {
    loading = false;
    start.disabled = false;
    start.textContent = 'Start breathing';
    detail.textContent = 'Press Start to take one slow breath.';
  });
  canvas.addEventListener('webglcontextlost', fallback);
  start.addEventListener('click', () => {
    if (loading || active) return;
    active = true;
    pose.amount = 0;
    const moveFocus = document.activeElement === start;
    start.hidden = true;
    stop.hidden = false;
    if (moveFocus) stop.focus({ preventScroll: true });
    section.dataset.breath = 'in';
    status.textContent = 'Breathe in…';
    detail.textContent = 'Gently, for 4 seconds.';
    cycle = gsap.timeline({ onComplete: () => finish(true) })
      .to(pose, { amount: 1, duration: 4, ease: 'sine.inOut', onUpdate: draw })
      .call(() => {
        section.dataset.breath = 'out';
        status.textContent = 'Breathe out…';
        detail.textContent = 'Slowly, for 6 seconds.';
      })
      .to(pose, { amount: 0, duration: 6, ease: 'sine.inOut', onUpdate: draw });
  });
  stop.addEventListener('click', () => finish());
  media.addEventListener('change', () => { finish(); updateInstruction(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && active) finish();
  });
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting && active) finish();
  }, { threshold: 0 }).observe(section);
  if (import.meta.hot) {
    import.meta.hot.dispose(() => { cycle?.kill(); renderer?.destroy(); });
  }
}
