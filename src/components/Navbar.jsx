import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageToggle from "./LanguageToggle";

const PHONE = "8890415892";

export default function Navbar({
  t,
  language,
  setLanguage,
}) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* Logo */}
        <button
          className="logo"
          onClick={() => go("home")}
        >
          <span className="logo-mark">DD</span>

          <span>
            <strong>DD CAR WASH</strong>
            <small>Clean • Shine • Care</small>
          </span>
        </button>

        {/* Navigation */}
        <nav
          className={
            open
              ? "nav-links open"
              : "nav-links"
          }
        >
          <button onClick={() => go("home")}>
            {t.home}
          </button>

          <button onClick={() => go("services")}>
            {t.services}
          </button>

          <button onClick={() => go("pricing")}>
            {t.pricing}
          </button>

          <button onClick={() => go("why-us")}>
            {t.whyUs}
          </button>

          <button onClick={() => go("location")}>
            {t.location}
          </button>

          <button onClick={() => go("contact")}>
            {t.contact}
          </button>
        </nav>

        {/* Language */}
        <LanguageToggle
          language={language}
          setLanguage={setLanguage}
        />

        {/* Call */}
        <a
          className="nav-call"
          href={`tel:${PHONE}`}
        >
          <Phone size={17} />
          <span>{language === "en" ? "Call Now" : "Call Karein"}</span>
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}