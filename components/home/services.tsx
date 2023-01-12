import dynamic from "next/dynamic";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { PortableText } from "@portabletext/react";

import { ServicesProps } from "../../interfaces/Services";
import { components } from "../../utils/components";

const TextBlock = dynamic(() => import("../text-block"));

const Services = ({ services }: ServicesProps) => {
  return (
    <section className="bg-white dark:bg-black relative z-20 py-20">
      <div className="container">
        <TextBlock
          title="Let's Work Together."
          text="Our solutions are individual, bespoke, and based on your unique business and technical requirements."
          buttonText="Let's Work"
          buttonColor="orange"
          buttonLink="/contact"
        />
        <div className="relative h-full cursor-grab active:cursor-grabbing mt-20">
          <Splide
            aria-label="Services"
            options={{
              perPage: 2,
              rewind: true,
              drag: "free",
              perMove: 1,
              snap: true,
              arrows: false,
              pagination: false,
              gap: 60,
              // mediaQuery: "max",
              // breakpoints: {
              //   1200: {
              //     perPage: 2,
              //     gap: 30,
              //   },
              // },
            }}
          >
            {services.map((service, index) => (
              <SplideSlide
                key={service._id}
                className="relative max-w-[420px] h-[250px] bg-black dark:bg-white text-white dark:text-black bg-center bg-no-repeat"
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <p>0{index + 1}</p>
                  <div>
                    <div className="w-[30px] h-[30px] bg-orange" />
                    <h3 className="uppercase font-basement text-white dark:text-black text-[1vw] tracking-wide">
                      {service.title}
                    </h3>
                    <div className="text-grey">
                      <PortableText
                        value={service.description}
                        components={components}
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      <div className="hero-container-unpin" />
    </section>
  );
};

export default Services;
