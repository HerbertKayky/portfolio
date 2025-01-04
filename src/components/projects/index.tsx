"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const projectsData = [
  {
    id: 1,
    title: {
      pt: "SoftPet",
      en: "SoftPet",
    },
    description: {
      pt: "Projeto de teste prático para a empresa SoftMakers. Com utilização de NextJS 14, autenticação com credenciais e Google via Next-Auth, integrado a Vercel com banco de dados PostgreSql pelo Railway.app.",
      en: "Practical test project for the company SoftMakers. Using NextJS 14, authentication with credentials and Google via Next-Auth, integrated with Vercel and a PostgreSQL database hosted on Railway.app.",
    },
    image: "/softpet.png",
    link: "https://softpet.vercel.app",
  },
  {
    id: 2,
    title: {
      pt: "Landing Page para Psicóloga",
      en: "Landing Page for Psychologists",
    },
    description: {
      pt: "Landing page desenvolvida para psicólogas, com foco em promover serviços de atendimento psicológico e construir uma presença online confiável. Com design intuitivo e espaço para depoimentos, agendamentos e informações sobre a profissional.",
      en: "Landing page developed for psychologists, focused on promoting psychological care services and building a reliable online presence. Featuring an intuitive design with space for testimonials, appointments, and information about the professional.",
    },
    image: "/psifolio.png",
    link: "https://psiport.vercel.app/",
  },
  {
    id: 3,
    title: {
      pt: "Landing Page para Vendedor",
      en: "Landing Page for Sellers",
    },
    description: {
      pt: "Landing page projetada para vendedores, com o objetivo de aumentar a visibilidade e as vendas. Serve como um portfólio interativo, permitindo mostrar produtos e serviços, capturar leads e estabelecer uma conexão direta com potenciais clientes.",
      en: "Landing page designed for sellers to increase visibility and sales. Serves as an interactive portfolio, showcasing products and services, capturing leads, and establishing a direct connection with potential clients.",
    },
    image: "/moto.png",
    link: "https://github.com/HerbertKayky/landing-page-1",
  },
];

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className="bg-[#212121] text-[#BEB7B7] pt-10 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F56539] mb-16 text-center">
          {language === "pt" ? "Meus Projetos" : "My Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#333333] rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={project.link} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
              </Link>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#F56539] mb-3">
                  {project.title[language]}
                </h3>
                <p className="text-lg leading-7 mb-5">
                  {project.description[language]}
                </p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff9900] hover:underline font-bold"
                >
                  {language === "pt" ? "Ver projeto" : "View Project"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
