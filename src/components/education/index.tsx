import Image from "next/image";
import studyImg from "/public/study.png";
import motarboard from "/public/207714.png";

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#212121] text-[#BEB7B7] py-20 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-[#F56539] mb-12">Formação</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
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
                  2022 - 2024
                </p>
                <h3 className="text-2xl font-bold text-[#EAEAEA]">
                  Graduação em Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-lg">UNINASSAU - Caruaru</p>
              </div>
            </div>

            <div className="flex items-center bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
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
                <p className="text-sm font-bold text-[#F56539] mb-2">2024</p>
                <h3 className="text-2xl font-bold text-[#EAEAEA]">
                  NextJS do Zero ao Avançado
                </h3>
                <p className="text-lg">
                  Udemy - Mateus Fragua (Sujeito Programador)
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#613528] rounded-3xl shadow-lg p-6 hover:bg-[#8B422C] transition-all">
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
                <p className="text-sm font-bold text-[#F56539] mb-2">2023</p>
                <h3 className="text-2xl font-bold text-[#EAEAEA]">
                  React do Zero à Maestria
                </h3>
                <p className="text-lg">
                  Udemy - Matheus Battisti (Hora de Codar)
                </p>
              </div>
            </div>
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
