import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#212121] text-[#BEB7B7] py-20 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-6xl font-bold text-[#F56539] mb-12">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-[#F56539] mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-transparent border-2 border-[#F56539] placeholder-[#BEB7B7] outline-none"
                placeholder="Seu nome"
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
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-[#F56539] mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded-lg bg-transparent border-2 border-[#F56539] placeholder-[#BEB7B7] outline-none"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex text-lg items-center px-5 py-3 bg-[#F56539] gap-3 text-black font-bold rounded-lg hover:bg-[#EAEAEA] hover:scale-110 transition-all duration-700"
            >
              Enviar
              <FiSend size={25} />
            </button>
          </form>

          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-lg text-center"></p>
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
    </section>
  );
}
