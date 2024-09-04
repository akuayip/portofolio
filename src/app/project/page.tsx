"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "website",
    title: "project 2",
    description:
      "PPLK atau Program Pengenalan Lingkungan Kampus merupakan pesta kaderisasi terbesar yang sangat megah karena dijalankan langsung secara terpusat dengan seluruh mahasiswa Baru sebagai pesertanya, serta tantangan bagaimana cara menyampaikan capaian tujuan yang diharapkan kepada peserta. PPLK ITERA 2024 diharapkan dapat menjadi gerbang pertama dalam terwujudnya mahasiswa baru yang kompetitif, berintelektual, serta siap menghadapi gempuran globalisasi.",
    stack: [
      { name: "Laravel, React, Tailwind, Typescript, Shadcn" },
      // { name: "React" },
    ],
    image: "/assets/pplk-doc1.png",
    live: "https://example.com/project2",
    github: "https://github.com/PPLK-ITERA/PPLK-ITERA-2024",
  },
  {
    num: "02",
    category: "portofolio",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium fugit quos. Atque cupiditate quae nemo, officia labore incidunt aliquam! Sed non voluptate velit inventore neque harum placeat amet blanditiis.",
    stack: [{ name: "Next.js, React, Tailwind, Typescript" }],
    image: "/assets/porto-doc1.png",
    live: "https://example.com/project1",
    github: "https://github.com/akuayip/portofolio",
  },
  {
    num: "03",
    category: "pygame",
    title: "project 3",
    description:
      "Tetap Hidup Adventure Game is an adventure game with the goal of finding a miraculous potion that can cure the illness of the main character's family. The concept of this game is inspired by the film Black Mirror, where the player becomes an integral part of determining the course of the story. In this game, players are given the opportunity to decide the ending of the game.",
    stack: [{ name: "PYTHON, Library: Pygame, Random, Math" }],
    image: "/assets/pygame-doc1.png",
    live: "https://example.com/project3",
    github: "https://github.com/akuayip/Tetap-Hidup-Adventure-Game-Interaktif",
  },
  {
    num: "04",
    category: "pygame",
    title: "project 4",
    description:
      "TEBAK AKU Game is a logic game. This is a simple but interesting game as it requires logical thinking and luck to guess the numbers correctly in the smallest possible number of guesses.",
    stack: [{ name: "PYTHON, Library: Pygame" }],
    image: "/assets/pygame-doc2.png",
    live: "https://example.com/project4",
    github: "https://github.com/akuayip/PRAK-PBO-Tebakaku",
  },
  {
    num: "05",
    category: "Mechine Learning",
    title: "project 5",
    description:
      "PREDIKSI KETERSEDIAAN OBAT MENGGUNAKAN ALGORITMA K-MEANS DAN ARIMA ( STUDI KASUS APOTEK GRATIA LAMPUNG TENGAH ). Penelitian ini mengoptimalkan manajemen persediaan obat dengan memanfaatkan model K-Means dan ARIMA untuk prediksi stok. Pengelompokan obat dilakukan menggunakan K-Means berdasarkan data historis, diikuti uji hipotesis dan prediksi kebutuhan obat dengan ARIMA. Hasil menunjukkan bahwa clustering paling efektif terjadi pada k=2 dengan silhouette score 0,72. Model ARIMA terbaik adalah ARIMA(3, 2, 1), dengan prediksi kebutuhan Fg Troches selama 12 bulan mendatang sebanyak 5540 strip dan MAPE 11,18%. Penelitian ini dapat diterapkan untuk prediksi obat lain dengan model ARIMA yang sesuai.",
    stack: [{ name: "PYTHON" }, { name: "Library: Pygame" }],
    image: "/assets/cooming-soon.jpg",
    live: "https://example.com/project4",
    github: "https://example.com/project4",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <section>
      <ParticlesBackground />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px]">
                <div className="text-8xl leading-none font-extrabold text-white">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all durationn-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent ">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20 flex items-center gap-4 mt-4"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-[460px]">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                {/* button */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-white text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Project;
