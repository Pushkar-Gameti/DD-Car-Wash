import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

const PHONE = "8890415892";
const WHATSAPP = `https://wa.me/91${PHONE}`;
const MAP_URL = "https://www.google.com/maps/dir//DD+Car+Wash,+100+Feet+Rd,+behind+Balaji+Medical,+Swami+Nagar,+Shobhagpura,+Udaipur,+Rajasthan+313001/@24.6082862,73.7048721,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!2m2!1d73.7099974!2d24.6140247?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

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