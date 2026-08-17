import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

const PHONE = "9983898084";
const WHATSAPP = `https://wa.me/91${PHONE}`;
const MAP_URL = "https://share.google/gMHpCkamTtYZWQcRW";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow"><span /> Contact DD Car Wash</div>
          <h2>
            Ready for a fresh,
            <br />
            <em>clean finish?</em>
          </h2>
          <p>
            Call or WhatsApp us before visiting, or open the map
            for directions.
          </p>
        </div>

        <div className="contact-cards">
          <a href={`tel:${PHONE}`} className="contact-card">
            <div className="contact-icon"><Phone /></div>
            <span><small>Call us</small><b>{PHONE}</b></span>
            <ArrowRight />
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon"><MessageCircle /></div>
            <span><small>WhatsApp</small><b>Chat with DD Car Wash</b></span>
            <ArrowRight />
          </a>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon"><MapPin /></div>
            <span>
              <small>Location</small>
              <b>Behind Balaji Medical, 100 Feet Road</b>
            </span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}