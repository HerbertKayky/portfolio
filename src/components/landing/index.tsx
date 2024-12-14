import Image from "next/image";
import profilepic from "/public/eu1.jpeg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Landing() {
  return (
    <div className="flex w-full min-h-screen relative flex-col lg:flex-row">
      <div className="bg-gradient-to-r from-[#bb5a00] via-[#fd5d01f3] to-[#ff9900] w-full lg:w-1/2 flex flex-col justify-center items-center p-6">
        <div className="absolute top-6 left-10">
          <h1 className="italic underline text-2xl font-bold"></h1>
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
        <div className="px-6 sm:px-12 md:px-20 max-w-xl">
          <h2 className="text-xl text-[#BEB7B7]">Desenvolvedor Web</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-[#EAEAEA]">
            Herbert Kayky
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-[#BEB7B7]">
            &quot;Eu vi coisas que vocês não imaginariam. Naves de ataque em
            chamas ao largo de Órion. Eu vi raios-c brilharem na escuridão
            próximos ao Portal de Tannhäuser. <br /> <br /> Todos esses momentos
            se perderão no tempo, como lágrimas na chuva. <br /> Hora de
            morrer.&quot;
          </p>
          <div className="flex gap-10">
            <button className="mt-10 text-lg rounded-full px-7 py-3 border-[3px] border-[#F56539] text-[#F56539] hover:text-black hover:bg-white hover:border-white transition-all">
              <Link href="#about">Sobre Mim</Link>
            </button>
            <button className="mt-10 text-lg rounded-full px-10 py-3 border-[3px] border-[#F56539] bg-[#f56539] text-black hover:border-white hover:text-white hover:bg-transparent transition-all">
              <span>Projetos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
