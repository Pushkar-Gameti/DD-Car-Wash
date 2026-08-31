import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE = "8890415892";
const WHATSAPP = `https://wa.me/91${PHONE}`;

const MAP_URL =
  "https://www.google.com/maps/dir//DD+Car+Wash,+100+Feet+Rd,+behind+Balaji+Medical,+Swami+Nagar,+Shobhagpura,+Udaipur,+Rajasthan+313001/@24.6082862,73.7048721,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!2m2!1d73.7099974!2d24.6140247?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

const PORTFOLIO_URL =
  "https://pushkardevportfolio.vercel.app/";

export default function Footer({ t }) {
  return (
    <>
      <footer>
        <div className="container footer-inner">

          {/* Logo */}
          <div className="logo">
            <span className="logo-mark">
              DD
            </span>

            <span>
              <strong>DD CAR WASH</strong>
              <small>Clean • Shine • Care</small>
            </span>
          </div>

          {/* Copyright + Developer */}
          <p className="developer-credit">
            © {new Date().getFullYear()} DD Car Wash.{" "}
            {t.copyright}{" "}
            {t.developer}{" "}

            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pushkar Gameti
            </a>
            {" | "}
            {t.role}
          </p>

          {/* Call */}
          <a href={`tel:${PHONE}`}>
            {t.call || "Call"} {PHONE}
          </a>

        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="mobile-cta">

        <a href={`tel:${PHONE}`}>
          <Phone />
          {t.call || "Call"}
        </a>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle />
          {t.whatsapp || "WhatsApp"}
        </a>

        <a
          href={MAP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin />
          {t.location || "Directions"}
        </a>

      </div>
    </>
  );
}