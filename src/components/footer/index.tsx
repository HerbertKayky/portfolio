import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#212121] text-white pt-10 text-center">
      <p className="text-xl">
        {language === "pt" ? "Desenvolvido com" : "Made with"}{" "}
        <span className="text-[#F56539]">❤</span>{" "}
        {language === "pt" ? "por Herbert Kayky" : "by Herbert Kayky"}
      </p>
    </footer>
  );
}
