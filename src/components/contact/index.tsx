"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Footer } from "../footer";
import Image from "next/image";
import book from "/public/book.png";
import laptop from "/public/laptop.png";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-[#212121] text-[#BEB7B7] pt-16 pb-3 min-h-screen flex flex-col relative"
    >
      <div className="container mx-auto px-5 flex-grow">
        <h2 className="text-6xl font-bold text-[#F56539] mb-12">
          {language === "pt" ? "Contato" : "Contact"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-[#F56539] mb-2"
              >
                {language === "pt" ? "Nome" : "Name"}
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-transparent border-2 border-[#F56539] placeholder-[#BEB7B7] outline-none"
                placeholder={language === "pt" ? "Seu nome" : "Your name"}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-[#F56539] mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-transparent border-2 border-[#F56539] placeholder-[#BEB7B7] outline-none"
                placeholder={language === "pt" ? "Seu e-mail" : "Your email"}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-[#F56539] mb-2"
              >
                {language === "pt" ? "Mensagem" : "Message"}
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded-lg bg-transparent border-2 border-[#F56539] placeholder-[#BEB7B7] outline-none"
                placeholder={language === "pt" ? "Mensagem" : "Message"}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex text-lg items-center px-5 py-3 bg-[#F56539] gap-3 text-black font-bold rounded-lg hover:bg-[#EAEAEA] hover:scale-110 transition-all duration-700"
            >
              {language === "pt" ? "Enviar" : "Send"}
              <FiSend size={25} />
            </button>
          </form>

          <div className="flex flex-col items-center justify-center space-y-6">
            <Link
              href="https://wa.me/5581993296809"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#F56539] text-black px-6 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#EAEAEA] transition-all duration-700"
            >
              <FaWhatsapp size={24} />
              <span className="font-bold">WhatsApp</span>
            </Link>
            <Link
              href="https://linkedin.com/in/herbertkayky/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#F56539] text-black px-6 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#EAEAEA] transition-all duration-700"
            >
              <FaLinkedin size={24} />
              <span className="font-bold">Linkedin</span>
            </Link>
            <Link
              href="https://github.com/herbertkayky/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-[#F56539] text-black px-6 py-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#EAEAEA] transition-all duration-700"
            >
              <FaGithub size={24} />
              <span className="font-bold">Github</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 space-x-3 hidden md:flex">
        <Image
          src={book}
          alt="Book Icon 1"
          className="w-24 h-24 animate-bounce"
        />
        <Image
          src={laptop}
          alt="Book Icon 2"
          className="w-24 h-24 animate-bounce delay-200"
        />
      </div>

      <Footer />
    </section>
  );
}
