import gsap from "gsap";
import dynamic from "next/dynamic";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const Button = dynamic(() => import("../button"));

const About = () => {
  // useIsomorphicLayoutEffect(() => {});
  return (
    <div className="bg-black text-white h-screen text-2xl relative z-20 py-20">
      <div className="container">
        <h1 className="font-basement uppercase text-[3.5vw] leading-[110%]">
          A software company leveraging modern technology to build cool shit,
          for cool people.
        </h1>
        <div className="grid grid-cols-2">
          <p className="text-grey">
            We strategize, develop, and execute ideas that help brands and
            businesses have fun on the internet while succeeding in the digital
            world.
          </p>
          <div className="flex">
            <div className="w-full md:w-[300px]">
              <Button text="yo" color="orange" />
            </div>
            <div className="w-full md:w-[300px]">
              <Button text="yo" color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
