import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/hero"));
const About = dynamic(() => import("../components/home/about"));
const Services = dynamic(() => import("../components/home/services"));
const Header = dynamic(() => import("../components/header"));

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mt-[100vh]">
        <About />
        <Services />
      </div>
      <footer className="text-xl text-blue-500 bg-orange">footer</footer>
    </>
  );
};

export default Home;
