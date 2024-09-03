"use client";

import CountUp from "react-countup"; // Pastikan Anda mengimpor CountUp dari pustaka yang benar

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
    <section >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={20}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
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
