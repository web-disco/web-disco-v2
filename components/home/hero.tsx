import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const LogoOutline = dynamic(() => import("./logo-outline"));

const Hero = () => {
  const component = useRef<HTMLDivElement>(null);

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
          markers: true,
          onUpdate: ({ progress }) => {
            if (index === 0) {
              const logoToProgress = gsap.utils.mapRange(1, 0, 0, 40);

              gsap.to(".hero-top-logo", {
                top: `-${logoToProgress(progress)}px`,
              });
              gsap.to(".hero-bottom-logo", {
                top: `${logoToProgress(progress)}px`,
              });
            }
            if (index === 1) {
              gsap.to(".hero-center-logo svg", {
                fill: `rgba(18, 18, 18, ${progress})`,
              });
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

  return (
    <section ref={component}>
      <div className="hero-container">
        <div className="hero-content w-full h-screen relative">
          <div className="hero-logo-container absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="hero-top-logo absolute -top-[20px] sm:-top-[40px]">
              <LogoOutline />
            </div>
            <div className="hero-center-logo">
              <LogoOutline />
            </div>
            <div className="hero-bottom-logo absolute top-[20px] sm:top-[40px]">
              <LogoOutline />
            </div>
            <div className="hero-globe absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0">
              <Image
                src="/images/globe.svg"
                width={290}
                height={290}
                alt="Globe"
                className="orbit"
              />
            </div>
          </div>
        </div>
        <div className="hero-panel h-screen mt-[-100vh]" />
        <div className="hero-panel h-screen" />
        <div className="hero-panel h-screen" />
        <div className="hero-panel h-screen" />
      </div>
    </section>
  );
};

export default Hero;
