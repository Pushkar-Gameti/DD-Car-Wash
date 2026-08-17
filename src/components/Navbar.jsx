import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const PHONE = "9983898084";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="logo" onClick={() => go("home")}>
          <span className="logo-mark">DD</span>
          <span>
            <strong>DD CAR WASH</strong>
            <small>Clean • Shine • Care</small>
          </span>
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("pricing")}>Pricing</button>
          <button onClick={() => go("why-us")}>Why Us</button>
          <button onClick={() => go("location")}>Location</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>

        <a className="nav-call" href={`tel:${PHONE}`}>
          <Phone size={17} /> Call Now
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}