import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "next-themes";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const Globe = dynamic(() => import("./globe"));
const LogoOutline = dynamic(() => import("./logo-outline"));

const Hero = () => {
  const { theme } = useTheme();
  const component = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels: HTMLDivElement[] = gsap.utils.toArray(".hero-panel");

      // hero container pin
      ScrollTrigger.create({
        trigger: ".hero-container",
        pin: true,
        scrub: true,
        start: "top top",
        endTrigger: ".hero-container-unpin",
        pinSpacing: false,
      });

      // hero panels
      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          pin: true,
          start: "top top",
          pinSpacing: false,
          onUpdate: ({ progress, direction }) => {
            if (index === 0) {
              const logoToProgress = gsap.utils.mapRange(1, 0, 0, 4);
              gsap.set(".hero-top-logo", {
                top: `-${logoToProgress(progress)}vw`,
              });
              gsap.set(".hero-bottom-logo", {
                top: `${logoToProgress(progress)}vw`,
              });
            }
            if (index === 1) {
              setProgress(progress);
              setDirection(direction);
            }
            if (index === 2) {
              const globeOpacity = gsap.utils.mapRange(1, 0, 0.3, 0);
              gsap.to(".hero-globe", {
                opacity: globeOpacity(progress),
              });
            }
          },
        });
      });
    }, component);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const fill = theme === "dark" ? 255 : 18;
    gsap.to(".hero-center-logo svg", {
      fill: `rgba(${fill}, ${fill}, ${fill}, ${progress})`,
      delay: direction === -1 ? 0 : 0.3,
    });
  }, [theme, progress, direction]);

  return (
    <section ref={component}>
      <div className="hero-container">
        <div className="hero-content w-full h-screen relative z-10">
          <div className="hero-logo-container absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="hero-top-logo absolute -top-[4vw]">
              <LogoOutline />
            </div>
            <div className="hero-center-logo">
              <LogoOutline />
            </div>
            <div className="hero-bottom-logo absolute top-[4vw]">
              <LogoOutline />
            </div>
            <div className="hero-globe absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">
              <Globe />
            </div>
          </div>
        </div>
        <div className="hero-panel h-screen mt-[-100vh]" />
        <div className="hero-panel h-screen" />
        <div className="hero-panel h-[50vh]" />
        <div className="hero-panel h-[50vh]" />
      </div>
    </section>
  );
};

export default Hero;
