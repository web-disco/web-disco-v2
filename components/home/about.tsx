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
        type: "lines",
      });

      gsap.set(split.lines, {
        opacity: 0,
        y: 100,
      });

      ScrollTrigger.create({
        trigger: ".home-about-container",
        start: "top 50%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to(split.lines, {
            y: 0,
            opacity: 1,
            stagger: { from: "start", each: 0.15 },
            delay: 0.15,
          });
          gsap.to(".home-about-content", {
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
          gsap.to(".home-about-content", {
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
      <div className="home-about-container flex flex-col justify-center bg-[#000] dark:bg-white text-white dark:text-black text-2xl relative z-20 py-20">
        <div className="container">
          <div className="tracking-wide">
            <h1 className="home-about-title font-basement uppercase lg:text-[3.5vw] leading-[110%]">
              A software company leveraging
            </h1>
            <h1 className="home-about-title font-basement uppercase lg:text-[3.5vw] leading-[110%]">
              modern technology to build cool shit,
            </h1>
            <h1 className="home-about-title font-basement uppercase lg:text-[3.5vw] leading-[110%] mb-10">
              for cool people.
            </h1>
          </div>
          <div className="home-about-content opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <p className="text-grey mb-8">
                  We strategize, develop, and execute ideas that help brands and
                  businesses have fun on the internet while succeeding in the
                  digital world.
                </p>
                <p className="text-grey">
                  We strategize, develop, and execute ideas that help brands and
                  businesses have fun on the internet while succeeding in the
                  digital world. We strategize, develop, and execute ideas that
                  help brands and businesses have fun on the internet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-5">
                <div className="w-full md:w-full lg:w-[300px]">
                  <Button text="About Us" color="white" />
                </div>
                <div className="w-full md:w-full lg:w-[300px]">
                  <Button text="Get In Touch" color="orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
