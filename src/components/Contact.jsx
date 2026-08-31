import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

const PHONE = "8890415892";
const WHATSAPP = `https://wa.me/91${PHONE}`;

const MAP_URL =
  "https://www.google.com/maps/dir//DD+Car+Wash,+100+Feet+Rd,+behind+Balaji+Medical,+Swami+Nagar,+Shobhagpura,+Udaipur,+Rajasthan+313001/@24.6082862,73.7048721,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!2m2!1d73.7099974!2d24.6140247?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

export default function Contact({ t }) {
  return (
    <section id="contact" className="contact-section">

      <div className="container contact-grid">

        {/* Contact Intro */}
        <div>

          <div className="eyebrow">
            <span />
            {t.eyebrow}
          </div>

          <h2>
            {t.title1}
            <br />
            <em>{t.title2}</em>
          </h2>

          <p>
            {t.description}
          </p>

        </div>

        {/* Contact Cards */}
        <div className="contact-cards">

          {/* Call */}
          <a
            href={`tel:${PHONE}`}
            className="contact-card"
          >
            <div className="contact-icon">
              <Phone />
            </div>

            <span>
              <small>{t.call}</small>
              <b>{PHONE}</b>
            </span>

            <ArrowRight />
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <MessageCircle />
            </div>

            <span>
              <small>{t.whatsapp}</small>
              <b>{t.whatsappText}</b>
            </span>

            <ArrowRight />
          </a>

          {/* Location */}
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <MapPin />
            </div>

            <span>
              <small>{t.location}</small>
              <b>{t.locationText}</b>
            </span>

            <ArrowRight />
          </a>

        </div>
      </div>

    </section>
  );
}