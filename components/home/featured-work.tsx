import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const FeaturedWork = () => {
  const component = useRef<HTMLDivElement>(null);
  const tvStaticAudio = useRef<HTMLAudioElement>(null);

  const [powerOn, setPowerOn] = useState(true);
  const [projectHovered, setProjectHovered] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [tvImageUrl, setTvImageUrl] = useState("../images/static.jpeg");

  useIsomorphicLayoutEffect(() => {
    if (tvStaticAudio.current) {
      tvStaticAudio.current.volume = 0.003;
      tvStaticAudio.current.loop = true;
    }

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: component.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          if (tvStaticAudio.current) {
            tvStaticAudio.current.play();
          }
        },
        onEnterBack: () => {
          if (tvStaticAudio.current) {
            tvStaticAudio.current.play();
          }
        },
        onLeave: () => {
          if (tvStaticAudio.current) {
            tvStaticAudio.current.pause();
          }
        },
        onLeaveBack: () => {
          if (tvStaticAudio.current) {
            tvStaticAudio.current.pause();
          }
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white relative z-10 h-screen" ref={component}>
      <audio id="tv-static-audio" ref={tvStaticAudio}>
        <source src="../audio/tv-static-audio.mp3" type="audio/mp3" />
      </audio>
      <div className="container">
        <h2 className="font-basement text-[48px] uppercase">Featured Work.</h2>
        <div className="grid grid-cols-2">
          <div className="relative w-[600px] h-[600px] bg-[url('../public/images/tv.png')] bg-contain bg-center bg-no-repeat">
            <div
              style={{
                backgroundImage: `url(${tvImageUrl})`,
              }}
              className={`tv-container bg-black absolute w-[550px] h-[550px] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[-1] ${
                projectHovered
                  ? `bg-contain bg-center g-no-repeat bg-white`
                  : `tv-static bg-black`
              }`}
            />
            <button
              className="absolute bg-transparent w-[25px] h-[15px] bottom-[50px] right-[65px]"
              onClick={() => {
                setPowerOn(!powerOn);
                if (powerOn) {
                  gsap.set(".tv-container", {
                    backgroundImage: `none`,
                  });
                  if (tvStaticAudio.current) {
                    tvStaticAudio.current.pause();
                  }
                } else {
                  gsap.set(".tv-container", {
                    backgroundImage: `url('../images/static.jpeg')`,
                  });
                  if (tvStaticAudio.current) {
                    tvStaticAudio.current.play();
                  }
                }
              }}
            />
          </div>
          <div className="inline">
            <p
              className="cursor-pointer"
              onMouseEnter={() => {
                setProjectHovered(true);
                setTvImageUrl("../images/globe.svg");
                gsap.set(".tv-container", {
                  backgroundColor: "white",
                });
                if (tvStaticAudio.current) {
                  console.log(tvStaticAudio.current.paused);
                }
                if (tvStaticAudio.current && !tvStaticAudio.current.paused) {
                  tvStaticAudio.current.pause();
                }
              }}
              onMouseLeave={() => {
                setProjectHovered(false);
                setTvImageUrl("../images/static.jpeg");
                gsap.set(".tv-container", {
                  backgroundColor: "#000",
                });
                if (tvStaticAudio.current && tvStaticAudio.current.paused) {
                  tvStaticAudio.current.play();
                }
              }}
            >
              Project 01
            </p>
            <p
              className="cursor-pointer"
              onMouseEnter={() => {
                setProjectHovered(true);
                setTvImageUrl("../images/logo-outline.svg");
                gsap.set(".tv-container", {
                  backgroundColor: "white",
                });
              }}
              onMouseLeave={() => {
                setProjectHovered(false);
                setTvImageUrl("../images/static.jpeg");
                gsap.set(".tv-container", {
                  backgroundColor: "#000",
                });
              }}
            >
              Project 02
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
