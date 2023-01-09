import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/hero"));
const About = dynamic(() => import("../components/home/about"));

const Home = () => {
  return (
    <>
      <Hero />
      <div className="h-screen mt-[100vh] relative z-10">
        <About />
      </div>
    </>
  );
};

export default Home;
