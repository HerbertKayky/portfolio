"use client";
import Image from "next/image";
import studyImg from "/public/study.png";
import motarboard from "/public/207714.png";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Education() {
  const { language } = useLanguage();

  const courseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="education"
      className="bg-[#212121] text-[#BEB7B7] pb-36"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-[#F56539] mb-12 lg:pt-0 pt-12">
          {language === "pt" ? "Formação" : "Education"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            {[
              {
                year: "2022 - 2024",
                title: {
                  pt: "Graduação em Análise e Desenvolvimento de Sistemas",
                  en: "Degree in Systems Analysis and Development",
                },
                location: "UNINASSAU - Caruaru",
              },
              {
                year: "2024",
                title: {
                  pt: "NextJS do zero à maestria",
                  en: "NextJS from zero to mastery",
                },
                location: "Udemy - Mateus Fragua (Sujeito Programador)",
              },
              {
                year: "2023",
                title: {
                  pt: "React do zero à maestria",
                  en: "React from zero to mastery",
                },
                location: "Udemy - Matheus Battisti (Hora de Codar)",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={courseVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-[#E57C58] flex justify-center items-center rounded-full">
                    <Image
                      src={motarboard}
                      width={50}
                      height={50}
                      alt="Ícone de formação"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#F56539] mb-2">
                    {course.year}
                  </p>
                  <h3 className="text-2xl font-bold text-[#EAEAEA]">
                    {language === "pt" ? course.title.pt : course.title.en}
                  </h3>
                  <p className="text-lg">{course.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Image
              src={studyImg}
              width={400}
              height={400}
              alt="Pessoa estudando"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
