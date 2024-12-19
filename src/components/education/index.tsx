import Image from "next/image";
import studyImg from "/public/study.png";

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#212121] text-[#BEB7B7] pt-2 min-h-screen"
    >
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F56539] mb-8">
          Formação
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#333333] rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-lg leading-7">
                Formado pela{" "}
                <span className="text-[#F56539] font-semibold">
                  Uninassau - Caruaru
                </span>
                . Durante minha graduação, adquiri habilidades em
                desenvolvimento de sistemas, resolução de problemas e inovação
                tecnológica, me capacitando para atuar na área de tecnologia com
                excelência.
              </p>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                Curso de Next.js
              </h3>
              <p className="text-lg">
                Concluído na Udemy, este curso aprofundou meus conhecimentos em
                desenvolvimento web com Next.js, abordando tópicos como
                renderização do lado do servidor, rotas dinâmicas e otimização
                de desempenho.
              </p>
            </div>
            <div className="bg-[#333333] rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                Curso de React
              </h3>
              <p className="text-lg">
                Também concluído na Udemy, este curso abrangeu fundamentos e
                práticas avançadas do React, incluindo hooks, gerenciamento de
                estado e construção de interfaces interativas.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
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
