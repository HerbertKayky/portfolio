import Image from "next/image";
import studyImg from "/public/study.png";

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#212121] text-[#BEB7B7] pt-20 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-[#F56539] mb-8">Formação</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
              <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                Graduação em Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-lg leading-7 font-bold">UNINASSAU - Caruaru</p>
            </div>

            <div className="bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                NextJS do zero ao avançado na prática 2024
              </h3>
              <p className="text-lg">
                Udemy - Mateus Fragua (Sujeito Programador)
              </p>
            </div>
            <div className="bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                React do Zero a Maestria (c/ hooks, router, API, Projetos)
              </h3>
              <p className="text-lg">
                Udemy - Matheus Battisti (Hora de codar)
              </p>
            </div>
          </div>

          <div className="justify-center items-center hidden sm:block ">
            <Image
              src={studyImg}
              width={1000}
              height={1000}
              alt="Ícone de alguém estudando"
              className="w-76 h-76 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
