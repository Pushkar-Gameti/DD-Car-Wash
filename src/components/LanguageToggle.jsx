import { Languages } from "lucide-react";

export default function LanguageToggle({
  language,
  setLanguage,
}) {
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={
        language === "en"
          ? "Switch to Hinglish"
          : "Switch to English"
      }
    >
      <Languages size={16} />

      <span className={language === "en" ? "active" : ""}>
        EN
      </span>

      <i>/</i>

      <span className={language === "hi" ? "active" : ""}>
        HI
      </span>
    </button>
  );
}