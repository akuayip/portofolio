"use client";

import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { IconDownload } from "@tabler/icons-react";
import Sosmed from "@/components/Sosmed";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full ">
      <ParticlesBackground />
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between ">
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="md:text-[24px] text-[16px] text-white ">
              Eittt !!!{" "}
            </span>
            <h1 className="text-[28px] md:text-[36px] text-white">
              Hello I&apos;am <br />
              <span className="md:text-[100px] text-[40px] text-accent">
                {" "}
                Ano YIPz
              </span>
            </h1>
            <p className="w-full xl:w-3/4 text-[12px] md:text-[20px] text-white ">
              Let&apos;s know who AM I ? and Explore my projects and feel free
              to connect with me on social media or through my contact page!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center mt-6 bg-accent rounded-full text-black"
              >
                <span>Download CV </span>
                <IconDownload stroke={2} className="ml-2" />
              </Button>
              <div className="mt-2 mb-4 md:mt-8 xl:mb-0">
                <Sosmed />
              </div>
            </div>
          </div>
          <div className="order-1 mt-10 xl:mt-0 -mb-10 md:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
