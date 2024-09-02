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
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8 ">
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-[24px]">Student Undergraduated</span>
            <h1 className="text-[36px]">
              Hello I'm <br />
              <span className="text-[100px] text-accent"> Ano YIPz</span>
            </h1>
            <p className="w-full md:w-3/4 text-[20px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, neque a accusantium nulla aperiam aut rem quaerat
              incidunt nemo rerum doloribus dolores esse dolor deleniti
              blanditiis, quo asperiores, nihil sequi!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center mt-6"
              >
                <span>Download CV </span>
                <IconDownload stroke={2} className="ml-2" />
              </Button>
              <div className="mt-8 xl:mb-0">
                <Sosmed />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Home;
