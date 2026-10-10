import "@fontsource-variable/fraunces/full.css";
import "@fontsource/linden-hill/400.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);
const media = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton =
  document.querySelector<HTMLButtonElement>("#motion-toggle")!;
const breathButton =
  document.querySelector<HTMLButtonElement>("#breath-button")!;
const breathStatus = document.querySelector<HTMLElement>("#breath-status")!;
let manualPause = false;
try {
  manualPause = localStorage.getItem("relaxed-rabbit-motion") === "paused";
} catch {
  /* The site works without storage. */
}
let scene: gsap.Context | undefined;
let breath: gsap.core.Timeline | undefined;
let breathing = false;
let breathTimer: ReturnType<typeof setTimeout> | undefined;
const paused = () => manualPause || media.matches;

function stopBreath(message = "A quiet little break, whenever you need it.") {
  breath?.kill();
  clearTimeout(breathTimer);
  gsap.set(".breath-sun, .breath-ring", { clearProps: "transform" });
  breathing = false;
  breathButton.setAttribute("aria-pressed", "false");
  breathButton.firstChild!.textContent = "Take a breath ";
  breathStatus.textContent = message;
}
function configureMotion() {
  scene?.revert();
  stopBreath();
  document.documentElement.dataset.motion = paused() ? "paused" : "active";
  motionButton.textContent = media.matches
    ? "Reduced motion enabled"
    : manualPause
      ? "Play animations"
      : "Pause animations";
  motionButton.setAttribute("aria-pressed", String(paused()));
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
    gsap.fromTo(
      ".breath-world",
      { rotate: -12 },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".pause-section",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      ".footer-wordmark span:first-child",
      { xPercent: -2 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      ".footer-wordmark span:nth-child(2)",
      { xPercent: 2 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      },
    );
  });
  ScrollTrigger.refresh();
}
motionButton.addEventListener("click", () => {
  if (media.matches) {
    motionButton.textContent = "Change motion in your device settings";
    return;
  }
  manualPause = !manualPause;
  try {
    localStorage.setItem(
      "relaxed-rabbit-motion",
      manualPause ? "paused" : "active",
    );
  } catch {
    /* Optional preference. */
  }
  configureMotion();
});
media.addEventListener("change", configureMotion);
breathButton.addEventListener("click", () => {
  if (breathing) {
    stopBreath();
    return;
  }
  breathing = true;
  breathButton.setAttribute("aria-pressed", "true");
  breathButton.firstChild!.textContent = "End the pause ";
  breathStatus.textContent = "Breathe in, gently.";
  if (!paused()) {
    breath = gsap
      .timeline()
      .to(".breath-sun", { scale: 1.16, duration: 4, ease: "sine.inOut" }, 0)
      .to(".breath-ring", { scale: 1.07, duration: 4, ease: "sine.inOut" }, 0)
      .call(() => {
        breathStatus.textContent = "And slowly breathe out.";
      })
      .to(".breath-sun, .breath-ring", {
        scale: 1,
        duration: 6,
        ease: "sine.inOut",
      })
      .call(() => stopBreath("A little lighter. Carry on at your own pace."));
  } else {
    breathTimer = setTimeout(() => {
      breathStatus.textContent = "And slowly breathe out.";
      breathTimer = setTimeout(
        () => stopBreath("A little lighter. Carry on at your own pace."),
        6000,
      );
    }, 4000);
  }
});
new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting && breathing) stopBreath();
  },
  { threshold: 0 },
).observe(document.querySelector(".pause-section")!);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopBreath();
});
document
  .querySelectorAll("details")
  .forEach((item) =>
    item.addEventListener("toggle", () => ScrollTrigger.refresh()),
  );
document.querySelector("#year")!.textContent = String(new Date().getFullYear());
document.fonts.ready.then(configureMotion);
