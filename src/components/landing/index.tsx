import Image from "next/image";
import profilepic from "/public/eu.jpeg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Landing() {
  return (
    <div className="flex w-full h-screen relative flex-col lg:flex-row">
      <div className="bg-[#F56539] w-full lg:w-1/2 h-full flex flex-col justify-center items-center p-6">
        <div className="flex rounded-full overflow-hidden mb-6">
          <Image
            width={340}
            height={300}
            className="rounded-full object-cover"
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

      <div className="bg-[#212121] w-full lg:w-2/3 h-full flex flex-col justify-center items-start text-white p-6">
        <div className="px-6 sm:px-12 md:px-20 max-w-xl">
          <h2 className="text-xl text-gray-300">Desenvolvedor Web</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-gray-200">
            Herbert Kayky
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            "Eu vi coisas que vocês não imaginariam. Naves de ataque em chamas
            ao largo de Órion. Eu vi raios-c brilharem na escuridão próximos ao
            Portal de Tannhäuser. <br /> <br /> Todos esses momentos se perderão
            no tempo, como lágrimas na chuva. <br /> Hora de morrer."
          </p>
        </div>
      </div>
    </div>
  );
}
