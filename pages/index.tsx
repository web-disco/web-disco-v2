import dynamic from "next/dynamic";
import { GetStaticProps, NextPage } from "next";
import client from "../client";

import { HomePageProps } from "../interfaces/HomePageProps";

const Hero = dynamic(() => import("../components/home/hero"));
const About = dynamic(() => import("../components/home/about"));
const Services = dynamic(() => import("../components/home/services"));
const FeaturedWork = dynamic(() => import("../components/home/featured-work"));

const Home: NextPage<HomePageProps> = ({ services }) => {
  return (
    <>
      <Hero />
      <div className="mt-[100vh]">
        <About />
        <Services services={services} />
        <FeaturedWork />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const services = await client.fetch(
    `*[_type == "service"] | order(order asc)`
  );

  return {
    props: {
      services,
    },
  };
};
