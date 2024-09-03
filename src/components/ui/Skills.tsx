import * as React from "react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import { skillsData } from "@/lib/data"; // Import data dari data.ts

export function Skills() {
  const [carouselApi, setCarouselApi] = useState<
    UseEmblaCarouselType[1] | null
  >(null);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000); // Auto-play every 3 seconds

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-sm"
      setApi={setCarouselApi}
    >
      <CarouselContent>
        {skillsData.map((skill, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="object-contain w-full h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
