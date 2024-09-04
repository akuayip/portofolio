"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Year of experience",
  },
  {
    num: 5,
    text: "Project complete",
  },
  {
    num: 12,
    text: "Repository on GitHub",
  },
  {
    num: 139,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none text-white">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start text-white"
            >
              <CountUp
                end={item.num}
                duration={20}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold text-white"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }text-white`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
