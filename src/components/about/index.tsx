import Image from "next/image";
import icon from "/public/icon2.png";

export function About() {
  return (
    <section
      id="about"
      className="bg-[#212121] text-[#BEB7B7] pt-16 min-h-screen"
    >
      <div className="w-full flex justify-center mb-8">
        <div className="w-full rounded-full max-w-[1500px] h-[5px] bg-gradient-to-r from-[#bb5a00] via-[#fd5d01f3] to-[#ff9900]"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F56539] mb-8">
            Quem sou eu
          </h2>
          <p className="mb-8 text-lg md:text-2xl leading-7">
            Meu nome é Herbert, tenho 20 anos e sou um desenvolvedor web
            fullstack formado em Análise e Desenvolvimento de Sistemas pela
            UNINASSAU - Caruaru.
          </p>
          <p className="text-lg md:text-2xl leading-7">
            Especializado em tecnologias como React, Next.js e Node.js, tenho
            experiência em criar soluções modernas e escaláveis. Além disso,
            possuo conhecimentos sólidos em bancos de dados relacionais, como
            PostgreSQL e MySQL, e não-relacionais, como MongoDB e Firebase.
          </p>
        </div>
        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 md:ml-10">
          <Image
            src={icon}
            alt="Illustration of a person working"
            className="w-[70%] md:w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
