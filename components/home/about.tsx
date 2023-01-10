import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { useTheme } from "next-themes";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const Button = dynamic(() => import("../button"));

const About = () => {
  const component = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText(".home-about-title", {
        type: "words,lines",
      });

      gsap.set(split.lines, {
        opacity: 0,
        y: 100,
      });

      ScrollTrigger.create({
        trigger: ".home-about-container",
        start: "top 65%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(split.lines, {
            y: 0,
            opacity: 1,
            stagger: { from: "start", each: 0.15 },
            delay: 0.15,
          });
          gsap.to(".home-about-text", {
            opacity: 1,
            delay: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to(split.lines, {
            opacity: 0,
            stagger: { from: "end", each: 0.15 },
            y: 100,
          });
          gsap.to(".home-about-text", {
            opacity: 0,
          });
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".home-about-container",
        start: "top 40px",
        end: "bottom bottom",
        markers: true,
        onEnter: () => {
          if (theme === "light") {
            gsap.to(".header", {
              color: "#FFF",
            });
          }
        },
        onLeaveBack: () => {
          if (theme === "light") {
            gsap.to(".header", {
              color: "#181818",
            });
          }
        },
      });
    }, component);

    return () => ctx.revert();
  }, [theme]);
  return (
    <section ref={component}>
      <div className="home-about-container bg-[#000] dark:bg-white text-white dark:text-black h-screen text-2xl relative z-20 py-20">
        <div className="container">
          <h1 className="home-about-title font-basement uppercase text-[3.5vw] leading-[110%] mb-10">
            A software company leveraging modern technology to build cool shit,
            for cool people.
          </h1>
          <div className="grid grid-cols-2">
            <p className="home-about-text text-grey opacity-0">
              We strategize, develop, and execute ideas that help brands and
              businesses have fun on the internet while succeeding in the
              digital world.
            </p>
            {/* <div className="flex">
              <div className="w-full md:w-[300px]">
                <Button text="yo" color="orange" />
              </div>
              <div className="w-full md:w-[300px]">
                <Button text="yo" color="white" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
