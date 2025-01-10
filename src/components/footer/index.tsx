import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { language } = useLanguage();

  const footerTextPt = ["Desenvolvido com ", "❤", " por Herbert Kayky"];
  const footerTextEn = ["Made with ", "❤", " by Herbert Kayky"];
  const footerText = language === "pt" ? footerTextPt : footerTextEn;

  return (
    <footer className="bg-[#212121] text-white pt-10 text-center">
      <p className="text-xl">
        {footerText.map((part, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.2,
            }}
            className={part === "❤" ? "text-[#F56539]" : ""}
          >
            {part}
          </motion.span>
        ))}
      </p>
    </footer>
  );
}
