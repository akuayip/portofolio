"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "./ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "Makan",
      description: "Menikmati berbagai jenis makanan, mencoba kuliner baru, dan menikmati sensasi rasa yang berbeda.",
      time: "Since forever",
      icon: "🍽️",
      color: "#FF6347",
    },
    {
      name: "Jalan Kaki",
      description: "Berjalan kaki untuk menjaga kesehatan, menikmati pemandangan alam, dan merenung.",
      time: "Since childhood",
      icon: "🚶‍♂️",
      color: "#2E8B57",
    },
    {
      name: "Berenang",
      description: "Menikmati kesegaran air, berenang untuk kebugaran, dan merasakan ketenangan saat di dalam air.",
      time: "Since childhood",
      icon: "🏊‍♂️",
      color: "#1E90FF",
    },
    {
      name: "Menyelam",
      description: "Menyelam ke dalam laut untuk menjelajahi keindahan bawah laut dan merasakan ketenangan di kedalaman.",
      time: "Since Junior High School",
      icon: "🤿",
      color: "#4682B4",
    },
    {
      name: "Bermain Game",
      description: "Bermain game untuk hiburan, meningkatkan keterampilan strategis, dan bersosialisasi dengan teman.",
      time: "Since i live",
      icon: "🎮",
      color: "#FF4500",
    },
  ];
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-400 ease-in-out hover:scale-[103%]",
        // light styles
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Hobby({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg  bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
