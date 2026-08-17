import { MapPin, Clock, Navigation } from "lucide-react";

const MAP_URL = "https://share.google/gMHpCkamTtYZWQcRW";

export default function Location() {
  return (
    <section id="location" className="location-section">
      <div className="container location-grid">
        <div className="map-placeholder">
          <MapPin size={42} />
          <span>DD CAR WASH</span>
          <small>Swami Nagar • Udaipur</small>
        </div>

        <div className="location-content">
          <div className="eyebrow dark"><span /> Find Us</div>
          <h2>Visit DD Car Wash</h2>

          <div className="location-detail">
            <MapPin />
            <div>
              <small>Address</small>
              <b>Behind Balaji Medical, 100 Feet Road,<br />Swami Nagar, Udaipur</b>
            </div>
          </div>

          <div className="location-detail">
            <Clock />
            <div>
              <small>Opening Hours</small>
              <b>Every Day • 9:00 AM – 6:00 PM</b>
            </div>
          </div>

          <a
            className="btn primary dark-text"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={18} /> Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}