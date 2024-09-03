"use client";
import { Hobby } from "@/components/Hobby";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { AnimatedListDemo } from "@/components/Skill";
import { TimelineDemo } from "@/components/TimelineProject";
import { Skills } from "@/components/ui/Skills";

const About = () => {
  return (
    <section className="h-full ">
      <ParticlesBackground />
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row  justify-between items-center xl:items-start xl:pt-8 xl:pb-8 ">
          <div className="order-2 xl:order-none text-center items-center xl:text-left w-3/4 ">
            <span className="md:text-[20px] text-[18px]">AHAa !!! </span>
            <h1 className="texxt-[20px] md:text-[32px]">
              This is about me <br />
              <span className="md:text-[40px] text-[32px] text-accent">
                ARIEF
              </span>
            </h1>
            <p className="w-full md:text-[20px] text-[12px]">
              As an aspiring software developer with 1 year of experience in the
              field. I am enthusiastic about building efficient and scalable
              solutions to solve real-world problems. Currently, I am also
              interested in learning about machine learning.
            </p>
            <div className="pt-10">
              <h1 className="text-center xl:text-left md:text-[40px] text-[32px] justify-between text-accent items-center">
                My Skill
              </h1>
                <AnimatedListDemo />
            </div>
            <div className="pt-10">
              <h1 className="text-center xl:text-left md:text-[40px] text-[32px] justify-between text-accent">
                My Hobby
              </h1>
                <Hobby />
            </div>
          </div>
          <div className="order-2 mb-8 xl:mb-0">
            <TimelineDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
