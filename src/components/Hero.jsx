import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

const PHONE = "8890415892";
const WHATSAPP = `https://wa.me/91${PHONE}`;

export default function Hero({ t }) {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-grid">
        <div className="hero-content">

          <div className="eyebrow">
            <span />
            {t.eyebrow}
          </div>

          <h1>
            {t.title1}
            <br />
            <em>{t.title2}</em>
          </h1>

          <p>
            {t.description}
          </p>

          <div className="hero-actions">

            <a
              className="btn primary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} />
              {t.whatsapp}
            </a>

            <a
              className="btn secondary"
              href={`tel:${PHONE}`}
            >
              <Phone size={18} />
              {PHONE}
            </a>

          </div>

          <div className="hero-info">

            <span>
              <Clock size={17} />
              {t.open}
            </span>

            <span>
              <MapPin size={17} />
              {t.location}
            </span>

          </div>
        </div>

        <div className="hero-visual">
          <div className="shine-ring ring-a" />
          <div className="shine-ring ring-b" />

          <div className="car-card">

            <div className="car-card-top">
              <strong>DD</strong>
              <span>CAR CARE</span>
            </div>

            <div className="car-illustration">

              <div className="car-body">
                <div className="window window-a" />
                <div className="window window-b" />
                <div className="headlight" />
                <div className="wheel wheel-a" />
                <div className="wheel wheel-b" />
              </div>

              <Sparkles className="sparkle sparkle-a" />
              <Sparkles className="sparkle sparkle-b" />

            </div>

            <div className="car-card-bottom">
              <span>WASH</span>
              <strong>SHINE</strong>
              <span>REPEAT</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}