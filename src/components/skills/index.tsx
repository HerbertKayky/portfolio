"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const skills = [
  { name: "Postgres", image: "/skills/postgres.png" },
  { name: "Figma", image: "/skills/figma.png" },
  { name: "JavaScript", image: "/skills/js.png" },
  { name: "CSS", image: "/skills/css.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "NextJS", image: "/skills/next.png" },
  { name: "HTML", image: "/skills/html.webp" },
  { name: "Prisma", image: "/skills/prisma.webp" },
  { name: "Git", image: "/skills/git.png" },
];

export function Skills() {
  return (
    <div className="bg-[#212121] text-center py-12">
      <h1 className="text-5xl font-bold text-[#F56539] mb-14">Skills</h1>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center p-4">
            <div className="p-4 rounded-lg shadow-[0_0_12px_2px_rgba(245,101,57,0.7)] hover:scale-110 transition-transform duration-300">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mx-auto object-contain"
              />
              <p className="text-[#EAEAEA] font-bold mt-4">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
