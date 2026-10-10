import "@fontsource-variable/fraunces/full.css";
import "@fontsource/linden-hill/400.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { setupBreathing } from "./breathing";

gsap.registerPlugin(ScrollTrigger);
const media = window.matchMedia("(prefers-reduced-motion: reduce)");
setupBreathing(media);
let scene: gsap.Context | undefined;
const paused = () => media.matches;

function configureMotion() {
  scene?.revert();
  document.documentElement.dataset.motion = paused() ? "paused" : "active";
  if (paused()) return;
  scene = gsap.context(() => {
    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    hero
      .to(".meadow", { yPercent: 11, scale: 1.13, ease: "none" }, 0)
      .to("h1 span:first-child", { y: -90, xPercent: -7, ease: "none" }, 0)
      .to("h1 span:last-child", { y: -45, xPercent: 7, ease: "none" }, 0)
      .to(".hero-copy p", { y: -40, opacity: 0.15, ease: "none" }, 0)
      .to(".hero-bottom", { y: 35, opacity: 0, ease: "none" }, 0);
    gsap.fromTo(
      ".spirit",
      { clipPath: "inset(0 2% round 4vw)" },
      {
        clipPath: "inset(0 0% round 0vw)",
        ease: "none",
        scrollTrigger: {
          trigger: ".spirit",
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        },
      },
    );
    gsap.fromTo(
      ".rush-word",
      { "--strike": 0 },
      {
        "--strike": 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".rush-word",
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      ".ease-line",
      { xPercent: 8 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".ease-line",
          start: "top 95%",
          end: "bottom 65%",
          scrub: 1,
        },
      },
    );
    gsap.to(".orbit-one", {
      yPercent: -20,
      rotate: 35,
      ease: "none",
      scrollTrigger: {
        trigger: ".spirit",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".orbit-two", {
      yPercent: 12,
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: ".spirit",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.fromTo(
      ".approach-heading",
      { y: 35 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".approach",
          start: "top 95%",
          end: "top 35%",
          scrub: 1,
        },
      },
    );
    // The afternoon gives way to the evening: a single, scroll-led closing scene.
    gsap.fromTo(".sunset-image", { yPercent: 5, scale: 1.06 }, {
      yPercent: 0, scale: 1, ease: "none",
      scrollTrigger: { trigger: ".farewell-scene", start: "top bottom", end: "bottom bottom", scrub: 0.8 },
    });
    gsap.fromTo(".farewell-copy", { y: 36 }, {
      y: 0, ease: "none",
      scrollTrigger: { trigger: ".farewell-scene", start: "top 90%", end: "top 20%", scrub: 0.8 },
    });
  });
  ScrollTrigger.refresh();
}
media.addEventListener("change", configureMotion);
// Preserve native disclosure semantics; animate only while a user changes state.
const panels = [...document.querySelectorAll<HTMLDetailsElement>(".principles details")];
const panelAnimations = new Map<HTMLDetailsElement, gsap.core.Tween>();
const desiredState = new Map(panels.map(panel => [panel, panel.open]));
const captions = ["Rooted in something useful.", "Everything, in harmony.", "Room for a little delight."];
function settlePanels() {
  panels.forEach(panel => {
    panelAnimations.get(panel)?.kill();
    gsap.killTweensOf(panel.querySelector(".principle-content"));
    panel.open = desiredState.get(panel) ?? panel.open;
    gsap.set(panel, { clearProps: "height,overflow" });
    gsap.set(panel.querySelector(".principle-content"), { clearProps: "opacity,transform" });
  });
  panelAnimations.clear();
  ScrollTrigger.refresh();
}
panels.forEach((panel, index) => {
  const summary = panel.querySelector("summary")!;
  const content = panel.querySelector<HTMLElement>(".principle-content")!;
  summary.addEventListener("click", event => {
    event.preventDefault();
    const opening = !desiredState.get(panel);
    desiredState.set(panel, opening);
    const startHeight = panel.getBoundingClientRect().height;
    panelAnimations.get(panel)?.kill();
    gsap.killTweensOf(content);
    if (opening) {
      const art = document.querySelector<HTMLElement>(".principle-art")!;
      art.dataset.active = String(index);
      document.querySelector(".garden-caption")!.textContent = captions[index];
    }
    if (paused()) {
      panel.open = opening;
      gsap.set(panel, { clearProps: "height,overflow" });
      gsap.set(content, { clearProps: "opacity,transform" });
      ScrollTrigger.refresh();
      return;
    }
    panel.open = true;
    panel.style.height = "auto";
    const naturalHeight = panel.getBoundingClientRect().height;
    const styles = getComputedStyle(panel);
    const collapsedHeight = summary.getBoundingClientRect().height + parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) + parseFloat(styles.borderTopWidth);
    gsap.set(panel, { height: startHeight, overflow: "hidden" });
    gsap.fromTo(content, { opacity: opening ? 0 : 1, y: opening ? 9 : 0 }, {
      opacity: opening ? 1 : 0, y: opening ? 0 : -5,
      duration: opening ? 0.32 : 0.18, delay: opening ? 0.07 : 0,
      ease: "power2.out", overwrite: true,
    });
    panelAnimations.set(panel, gsap.to(panel, {
      height: opening ? naturalHeight : collapsedHeight,
      duration: opening ? 0.42 : 0.3, ease: "power3.inOut",
      onComplete: () => {
        panel.open = opening;
        gsap.set(panel, { clearProps: "height,overflow" });
        gsap.set(content, { clearProps: "opacity,transform" });
        panelAnimations.delete(panel);
        ScrollTrigger.refresh();
      },
    }));
  });
  panel.addEventListener("toggle", () => {
    if (!panelAnimations.has(panel)) desiredState.set(panel, panel.open);
  });
});
media.addEventListener("change", settlePanels);
window.addEventListener("resize", settlePanels);
document.querySelector("#year")!.textContent = String(new Date().getFullYear());
document.fonts.ready.then(configureMotion);
