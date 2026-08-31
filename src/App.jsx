
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { translations } from "./data/translations";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("dd-language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("dd-language", language);
  }, [language]);

  const t = translations[language];

  return (
    <>
      <Navbar
        t={t.nav}
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        <Hero t={t.hero} />
        <Services t={t.services} />
        <Pricing t={t.pricing} />
        <WhyChooseUs t={t.whyUs} />
        <Reviews t={t.reviews} />
        <Location t={t.location} />
        <Contact t={t.contact} />
      </main>

      <Footer t={t.footer} />
    </>
  );
}

export default App;