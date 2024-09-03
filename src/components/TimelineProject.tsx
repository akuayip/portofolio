import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";

export function TimelineEdu() {
  const data = [
    {
      title: "2022 - Now",
      content: (
        <div>
          <h1 className="text-white dark:text-neutral-200 text-sm md:text-xl font-normal mb-8">
            Sumatera Institute of Technology
          </h1>
          <div className="grid gap-4">
            <p>✅ AI NOVAC 2024</p>
            <p>✅ GEMASTIK 2024</p>
            <p>✅ LKTI </p>
            <p>✅ ESSAY NASIONAL</p>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <h1 className="text-white dark:text-neutral-200 text-sm md:text-xl font-normal mb-8">
            Senior High School Kebangsaan
          </h1>
          <div className="grid gap-4">
            <p>✅ BRAWIJAYA EVENT ASTRONOMY 2022</p>
            <p>✅ HiLo Teen DESIGN THINKING MARATHON 2022</p>
            <p>✅ OSN ASTRONOMI 2022</p>
            <p>✅ OSN ASTRONOMI 2021</p>
            <p>✅ OSN ASTRONOMI 2021 by POSI</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
