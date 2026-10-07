"use client";

import { useEffect, useRef, useState } from "react";
import { cyberVerifiedTools } from "@/lib/portfolio-content";
import styles from "./laptop-sequence.module.css";

const laptopFrameSources = [0, 1, 2, 3, 4].map(
  (index) => `/img/alienware/ALIENWARE_0${index}.webp`,
);

const animationPhases = {
  laptopOpenEnd: 0.62,
  laptopFadeStart: 0.68,
  laptopFadeEnd: 0.8,
  desktopExpandStart: 0.68,
  desktopExpandEnd: 0.8,
  cursorAppearStart: 0.77,
  cursorTravelStart: 0.78,
  cursorTravelEnd: 0.85,
  introFadeStart: 0.78,
  introFadeEnd: 0.85,
  menuOpenStart: 0.84,
  menuOpenEnd: 0.9,
} as const;

const clampUnitInterval = (value: number) => Math.min(1, Math.max(0, value));
const phaseProgress = (progress: number, start: number, end: number) =>
  clampUnitInterval((progress - start) / (end - start));

/**
 * A scroll-led chapter, not a scroll controller. The page remains native-scrollable
 * and the whole story is readable when JavaScript or motion is unavailable.
 */
export default function LaptopSequence() {
  const scrollRunwayRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const kaliDesktopRef = useRef<HTMLDivElement>(null);
  const kaliLauncherRef = useRef<HTMLSpanElement>(null);
  const bootIntroRef = useRef<HTMLDivElement>(null);
  const kaliCursorRef = useRef<HTMLDivElement>(null);
  const kaliMenuRef = useRef<HTMLDivElement>(null);
  const laptopFrameRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  useEffect(() => {
    const scrollRunway = scrollRunwayRef.current;
    const laptop = laptopRef.current;
    const kaliDesktop = kaliDesktopRef.current;
    const kaliLauncher = kaliLauncherRef.current;
    const bootIntro = bootIntroRef.current;
    const kaliCursor = kaliCursorRef.current;
    const kaliMenu = kaliMenuRef.current;
    if (
      !scrollRunway ||
      !laptop ||
      !kaliDesktop ||
      !kaliLauncher ||
      !bootIntro ||
      !kaliCursor ||
      !kaliMenu
    )
      return;
    setIsInteractive(true);

    const reducedMotionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopViewport = window.matchMedia("(min-width: 768px)");
    let animationFrameId = 0;
    let scrollMotionEnabled = false;

    const render = () => {
      animationFrameId = 0;
      const runwayBounds = scrollRunway.getBoundingClientRect();
      const scrollDistance = Math.max(
        1,
        runwayBounds.height - window.innerHeight,
      );
      const scrollProgress = clampUnitInterval(
        -runwayBounds.top / scrollDistance,
      );
      const laptopOpening = phaseProgress(
        scrollProgress,
        0,
        animationPhases.laptopOpenEnd,
      );
      const activeFrameIndex = Math.round(
        laptopOpening * (laptopFrameSources.length - 1),
      );

      laptopFrameRefs.current.forEach((image, index) => {
        if (!image) return;
        image.style.opacity = index === activeFrameIndex ? "1" : "0";
      });

      const laptopScale = 0.76 + laptopOpening * 0.29;
      laptop.style.transform = `translate3d(0, ${(1 - laptopOpening) * 5}%, 0) scale(${laptopScale})`;
      laptop.style.opacity = String(
        1 -
          phaseProgress(
            scrollProgress,
            animationPhases.laptopFadeStart,
            animationPhases.laptopFadeEnd,
          ),
      );

      const desktopExpansion = phaseProgress(
        scrollProgress,
        animationPhases.desktopExpandStart,
        animationPhases.desktopExpandEnd,
      );
      kaliDesktop.style.transform = `translate3d(0, 0, 0) scale(${0.55 + desktopExpansion * 0.45})`;
      kaliDesktop.style.opacity = String(desktopExpansion);

      // Once the Kali boot fills the viewport, the pointer follows the launcher's
      // path. Its position is computed from scroll progress, so reversing scroll
      // immediately reverses the whole sequence without a queued animation.
      const cursorTravel = phaseProgress(
        scrollProgress,
        animationPhases.cursorTravelStart,
        animationPhases.cursorTravelEnd,
      );
      const launcherBounds = kaliLauncher.getBoundingClientRect();
      const desktopBounds = kaliDesktop.getBoundingClientRect();
      const launcherX =
        launcherBounds.left + launcherBounds.width / 2 - desktopBounds.left;
      const launcherY =
        launcherBounds.top + launcherBounds.height / 2 - desktopBounds.top;
      const cursorX =
        (1 - cursorTravel) * window.innerWidth * 0.53 +
        cursorTravel * launcherX;
      const cursorY =
        (1 - cursorTravel) * window.innerHeight * 0.54 +
        cursorTravel * launcherY;
      kaliCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      kaliCursor.style.opacity = String(
        phaseProgress(
          scrollProgress,
          animationPhases.cursorAppearStart,
          animationPhases.cursorTravelStart + 0.02,
        ) *
          (1 -
            phaseProgress(
              scrollProgress,
              animationPhases.menuOpenStart,
              animationPhases.menuOpenEnd,
            )),
      );

      bootIntro.style.opacity = String(
        1 -
          phaseProgress(
            scrollProgress,
            animationPhases.introFadeStart,
            animationPhases.introFadeEnd,
          ),
      );
      const menuOpening = phaseProgress(
        scrollProgress,
        animationPhases.menuOpenStart,
        animationPhases.menuOpenEnd,
      );
      kaliMenu.style.opacity = String(menuOpening);
      kaliMenu.style.transform = `translate3d(0, ${-16 * (1 - menuOpening)}px, 0) scale(${0.96 + menuOpening * 0.04})`;
    };

    const requestRender = () => {
      if (scrollMotionEnabled && !animationFrameId)
        animationFrameId = window.requestAnimationFrame(render);
    };

    const configure = () => {
      scrollMotionEnabled =
        desktopViewport.matches && !reducedMotionPreference.matches;
      if (!scrollMotionEnabled) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
        scrollRunway.removeAttribute("data-motion");
        laptopFrameRefs.current.forEach((image) =>
          image?.style.removeProperty("opacity"),
        );
        laptop.style.removeProperty("transform");
        laptop.style.removeProperty("opacity");
        kaliDesktop.style.removeProperty("transform");
        kaliDesktop.style.removeProperty("opacity");
        bootIntro.style.removeProperty("opacity");
        kaliCursor.style.removeProperty("transform");
        kaliCursor.style.removeProperty("opacity");
        kaliMenu.style.removeProperty("transform");
        kaliMenu.style.removeProperty("opacity");
        return;
      }

      scrollRunway.dataset.motion = "on";
      requestRender();
    };

    reducedMotionPreference.addEventListener("change", configure);
    desktopViewport.addEventListener("change", configure);
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    configure();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      reducedMotionPreference.removeEventListener("change", configure);
      desktopViewport.removeEventListener("change", configure);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
    };
  }, []);

  const toolCount = cyberVerifiedTools.length;
  const selectedTool =
    cyberVerifiedTools[activeToolIndex] ?? cyberVerifiedTools[0];

  return (
    <section
      id="cyber-lab"
      className={styles.chapter}
      aria-labelledby="lab-heading"
    >
      <div ref={scrollRunwayRef} className={styles.runway}>
        <div className={styles.stage}>
          <div className={styles.aura} aria-hidden="true" />
          <div ref={laptopRef} className={styles.laptop} aria-hidden="true">
            {laptopFrameSources.map((src, index) => (
              // Transparent, equal-sized WebP versions of the five supplied frames.
              // A single frame is visible at a time so changing geometry never ghosts.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                ref={(node) => {
                  laptopFrameRefs.current[index] = node;
                }}
                className={
                  index === laptopFrameSources.length - 1
                    ? styles.fallbackFrame
                    : styles.frame
                }
                src={src}
                alt=""
                width={1536}
                height={1024}
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
          <div
            ref={kaliDesktopRef}
            className={styles.portal}
            aria-hidden="true"
          >
            <div className={styles.portalTopbar}>
              <span ref={kaliLauncherRef} className={styles.portalLauncher}>
                K
              </span>
              <span>murilo@lab:~</span>
              <span className={styles.portalClock}>LAB / KALI LINUX</span>
            </div>
            <div ref={bootIntroRef} className={styles.portalIntro}>
              <div className={styles.portalMark}>K</div>
              <p>LABORATÓRIO / KALI LINUX</p>
              <strong>Da hipótese à prova.</strong>
            </div>
            <div ref={kaliMenuRef} className={styles.portalMenu}>
              <div className={styles.portalMenuHeader}>
                <span>MENU / FERRAMENTAS</span>
                <span>01—{String(toolCount).padStart(2, "0")}</span>
              </div>
              <ul>
                {cyberVerifiedTools.map((tool, index) => (
                  <li key={tool.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
              <div className={styles.portalMenuFooter}>
                Role para explorar cada prática ↓
              </div>
            </div>
            <div ref={kaliCursorRef} className={styles.portalCursor}>
              <svg
                viewBox="0 0 24 30"
                width="24"
                height="30"
                aria-hidden="true"
              >
                <path
                  d="M2 2v23l6.1-5.5 4.2 8 4.3-2.2-4.2-8H21L2 2Z"
                  fill="#f5fbff"
                  stroke="#07101a"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.stageCaption} aria-hidden="true">
            <span>LAB / 01</span>
            <span>exploração guiada pelo scroll</span>
          </div>
        </div>
      </div>

      <div className={styles.desktop}>
        <div className={styles.desktopTopbar}>
          <span className={styles.desktopBrand}>
            <span className={styles.brandMark}>K</span> LABORATÓRIO KALI
          </span>
          <span className={styles.desktopPath}>~/pratica-verificada</span>
          <span className={styles.desktopStatus}>● ambiente de estudo</span>
        </div>

        <div className={styles.desktopContent}>
          <div className={styles.desktopHeading}>
            <span className={styles.eyebrow}>AMBIENTE DE TRABALHO</span>
            <h2 id="lab-heading">Ferramentas em contexto.</h2>
            <p>
              O laboratório de sessões combina uma aplicação local, automação do
              navegador e scripts de diagnóstico. Cada item abaixo corresponde a
              uma prática documentada.
            </p>
          </div>

          {isInteractive && selectedTool && (
            <div className={styles.explorer}>
              <div className={styles.rangeRail}>
                <span>01</span>
                <input
                  type="range"
                  min={0}
                  max={Math.max(0, toolCount - 1)}
                  value={activeToolIndex}
                  onChange={(event) =>
                    setActiveToolIndex(Number(event.target.value))
                  }
                  aria-label="Explorar ferramentas verificadas"
                  aria-valuetext={selectedTool.name}
                />
                <span>{String(toolCount).padStart(2, "0")}</span>
              </div>
              <div className={styles.spotlight} aria-live="polite">
                <span className={styles.spotlightIndex}>
                  {String(activeToolIndex + 1).padStart(2, "0")} /{" "}
                  {String(toolCount).padStart(2, "0")}
                </span>
                <h3>{selectedTool.name}</h3>
                <p>{selectedTool.context}</p>
                <span className={styles.verified}>PRÁTICA DOCUMENTADA</span>
              </div>
            </div>
          )}

          <ol
            className={styles.toolGrid}
            aria-label="Ferramentas do laboratório"
          >
            {cyberVerifiedTools.map((tool, index) => (
              <li key={tool.name} className={styles.toolCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{tool.name}</h3>
                <p>{tool.context}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
