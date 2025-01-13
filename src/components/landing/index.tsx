"use client";
import Image from "next/image";
import profilepic from "/public/eu1.jpeg";
import { PiTranslateFill } from "react-icons/pi";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { LuMessageCircleWarning } from "react-icons/lu";
import { useState } from "react";

export function Landing() {
  const { language, setLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen relative flex-col lg:flex-row">
      <div className="bg-gradient-to-r from-[#bb5a00] via-[#fd5d01f3] to-[#ff9900] w-full lg:w-1/2 flex flex-col justify-center items-center p-6 relative">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <button
            className="px-2 py-1 border border-white text-white rounded hover:bg-white hover:text-black transition"
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          >
            <PiTranslateFill size={35} />
          </button>
        </div>

        <div className="flex rounded-full overflow-hidden mb-6">
          <Image
            width={340}
            height={340}
            src={profilepic}
            alt="Foto de perfil"
          />
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/HerbertKayky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-125 transition-all"
          >
            <FaGithub size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/herbertkayky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-125 transition-all"
          >
            <FaLinkedin size={42} />
          </Link>
          <Link
            href="https://www.instagram.com/kayky.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-125 transition-all"
          >
            <FaInstagram size={32} />
          </Link>
        </div>
      </div>

      <div className="bg-[#212121] w-full lg:w-2/3 flex flex-col justify-center items-start p-6">
        <div className="absolute top-6">
          <button
            className="px-2 py-1 border border-white text-white rounded hover:bg-white hover:text-black transition"
            onClick={() => setIsModalOpen(true)}
          >
            <LuMessageCircleWarning size={35} />
          </button>
        </div>

        <div className="px-6 sm:px-12 md:px-20 max-w-xl">
          <h2 className="text-xl text-[#BEB7B7]">
            {language === "pt" ? "Desenvolvedor Web" : "Web Developer"}
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-[#EAEAEA]">
            Herbert Kayky
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-[#BEB7B7]">
            {language === "pt" ? (
              <>
                &quot;Eu vi coisas que vocês não imaginariam. Naves de ataque em
                chamas ao largo de Órion. Eu vi raios-c brilharem na escuridão
                próximos ao Portal de Tannhäuser. <br /> <br /> Todos esses
                momentos se perderão no tempo, como lágrimas na chuva. <br />{" "}
                Hora de morrer.&quot;
              </>
            ) : (
              <>
                &quot;I’ve seen things you people wouldn’t believe. Attack ships
                on fire off the shoulder of Orion. I watched c-beams glitter in
                the dark near the Tannhäuser Gate. <br /> <br /> All those
                moments will be lost in time, like tears in rain. <br /> Time to
                die.&quot;
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-6 mt-10">
            <Link
              href="#about"
              className="text-base sm:text-lg rounded-full px-6 py-2 border-2 border-[#F56539] text-[#F56539] hover:text-black hover:bg-white hover:border-white transition-all"
            >
              {language === "pt" ? "Sobre mim" : "About Me"}
            </Link>
            <Link
              href="#projects"
              className="text-base sm:text-lg rounded-full px-8 py-2 border-2 border-[#F56539] bg-[#F56539] text-black hover:border-white hover:text-white hover:bg-transparent transition-all"
            >
              {language === "pt" ? "Projetos" : "Projects"}
            </Link>
            <Link
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg rounded-full px-6 py-2 border-2 border-[#F56539] text-[#F56539] hover:text-black hover:bg-white hover:border-white transition-all"
            >
              {language === "pt" ? "Baixar CV" : "Download CV"}
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-orange-500 rounded-lg shadow-lg p-6 text-center max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-[#eaeaea] hover:text-white relative inline-block group">
              <span className="relative z-10">
                {language === "pt"
                  ? "Sobre este Projeto"
                  : "About this Project"}
              </span>
              <span className="absolute inset-0 bg-[#54b3d6] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0"></span>
            </h2>

            <p className="text-white mb-6">
              {language === "pt"
                ? "Este projeto foi desenvolvido utilizando Next.js 14 com Tailwind CSS para estilização. O portfólio foi criado com o objetivo de apresentar uma coleção de trabalhos e projetos que desenvolvi ao longo da minha jornada como desenvolvedor."
                : "This project was developed using Next.js 14 with Tailwind CSS for styling. The portfolio was created to showcase a collection of work and projects I have developed throughout my journey as a developer."}
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#212121] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              {language === "pt" ? "Fechar" : "Close"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
