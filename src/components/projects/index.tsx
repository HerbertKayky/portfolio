import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "SoftPet",
    description:
      "Projeto de teste prático para a empresa SoftMakers. Com utilização de NextJS 14, autenticação com credenciais e Google via Next-Auth, integrado a Vercel com banco de dados PostgreSql pelo Railway.app",
    image: "/softpet.png",
    link: "https://softpet.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "Aplicativo de e-commerce completo, com autenticação, carrinho de compras e integração com Stripe.",
    image: "/ecommerce.png",
    link: "https://ecommerce.com",
  },
  {
    id: 3,
    title: "Blog Tech",
    description:
      "Blog voltado para tecnologia, utilizando CMS para gerenciar conteúdos de forma eficiente.",
    image: "/blog.png",
    link: "https://blogtech.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#212121] text-[#BEB7B7] pt-20 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F56539] mb-16 text-center">
          Meus Projetos
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
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
              </Link>

              <div className="p-5">
                <h3 className="text-2xl font-bold text-[#F56539] mb-3">
                  {project.title}
                </h3>
                <p className="text-lg leading-7 mb-5">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff9900] hover:underline font-bold"
                >
                  Ver projeto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
