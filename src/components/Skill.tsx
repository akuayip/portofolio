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
    name: "C++",
    description:
      "High-performance language known for system-level programming and competitive coding.",
    time: "Since 2015",
    icon: "💻",
    color: "#00C9A7",
  },
  {
    name: "Python",
    description:
      "Versatile language favored for data science, machine learning, and web development.",
    time: "Since 2017",
    icon: "🐍",
    color: "#FFB800",
  },
  {
    name: "Java",
    description:
      "Robust and platform-independent language, popular for enterprise-level applications.",
    time: "Since 2016",
    icon: "☕",
    color: "#FF3D71",
  },
  {
    name: "MySQL",
    description:
      "Reliable relational database management system used for storing and managing data.",
    time: "Since 2018",
    icon: "🗄️",
    color: "#1E86FF",
  },
  {
    name: "JavaScript",
    description:
      "Core language of the web, used for building interactive and dynamic websites.",
    time: "Since 2017",
    icon: "📜",
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    description:
      "Standard markup language for creating web pages and web applications.",
    time: "Since 2016",
    icon: "🌐",
    color: "#E34F26",
  },
  {
    name: "CSS",
    description:
      "Styling language used to design the look and feel of web pages.",
    time: "Since 2016",
    icon: "🎨 ",
    color: "#1572B6",
  },
  {
    name: "Figma",
    description:
      "Collaborative interface design tool used for prototyping and creating user interfaces.",
    time: "Since 2019",
    icon: "🎨",
    color: "#A259FF",
  },
  {
    name: "Notion",
    description:
      "All-in-one workspace for note-taking, knowledge management, and project management.",
    time: "Since 2020",
    icon: "📋",
    color: "#2F3437",
  },
  {
    name: "Miro",
    description:
      "Online collaborative whiteboard platform for brainstorming, planning, and team collaboration.",
    time: "Since 2020",
    icon: "🖊️",
    color: "#FFD02F",
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
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg  bg-background md:shadow-xl",
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
