"use client";
import React, { useEffect, useState } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { AnimatedListDemo } from "@/components/Skill";
import { TimelineDemo } from "@/components/TimelineProject";

const About = () => {
  const [showAnimatedList, setShowAnimatedList] = useState(false);
  const [showTimelineDemo, setShowTimelineDemo] = useState(false);

  useEffect(() => {
    // Delay for AnimatedListDemo
    const animatedListTimer = setTimeout(() => {
      setShowAnimatedList(true);
    }, 500); // Delay 500ms

    // Delay for TimelineDemo
    const timelineDemoTimer = setTimeout(() => {
      setShowTimelineDemo(true);
    }, 1000); // Delay 1000ms

    // Cleanup timers if component unmounts
    return () => {
      clearTimeout(animatedListTimer);
      clearTimeout(timelineDemoTimer);
    };
  }, []);

  return (
    <section className="h-full ">
      <ParticlesBackground />
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row justify-between xl:pt-8 xl:pb-8 ">
          <div className="order-2 xl:order-none text-center xl:text-left w-3/4 ">
            <span className="text-[20px]">AHAa !!! </span>
            <h1 className="text-[32px]">
              This is about me <br />
              <span className="text-[40px] text-accent">ARIEF</span>
            </h1>
            <p className="w-full md:w-3/4 text-[20px]">
              As an aspiring software developer with 1 year of experience in the
              field. I am enthusiastic about building efficient and scalable
              solutions to solve real-world problems. Currently, I am also
              interested in learning about machine learning. 
            </p>
            <div className="pt-10">
              <h1 className="text-left text-[40px] justify-between text-accent">
                My Skill
              </h1>
              {showAnimatedList && <AnimatedListDemo />} {/* Render with delay */}
            </div>
          </div>
          <div className="order-1 mb-8 xl:mb-0">
            {showTimelineDemo && <TimelineDemo />} {/* Render with delay */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
