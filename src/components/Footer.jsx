import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE = "9983898084";
const WHATSAPP = `https://wa.me/91${PHONE}`;
const MAP_URL = "https://share.google/gMHpCkamTtYZWQcRW";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container footer-inner">
          <div className="logo">
            <span className="logo-mark">DD</span>
            <span>
              <strong>DD CAR WASH</strong>
              <small>Clean • Shine • Care</small>
            </span>
          </div>

          <p>© {new Date().getFullYear()} DD Car Wash. All rights reserved.</p>
          <a href={`tel:${PHONE}`}>Call {PHONE}</a>
        </div>
      </footer>

      <div className="mobile-cta">
        <a href={`tel:${PHONE}`}><Phone /> Call</a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
        <a href={MAP_URL} target="_blank" rel="noreferrer"><MapPin /> Directions</a>
      </div>
    </>
  );
}