import gsap from "gsap";

import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

const About = () => {
  useIsomorphicLayoutEffect(() => {});
  return (
    <div className="bg-black text-white h-screen">
      <h1>About</h1>
      <p>This is the about content</p>
    </div>
  );
};

export default About;
