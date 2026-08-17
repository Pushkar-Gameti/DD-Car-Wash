import { MapPin, Clock, Navigation } from "lucide-react";

const MAP_URL = "https://www.google.com/maps/dir//DD+Car+Wash,+100+Feet+Rd,+behind+Balaji+Medical,+Swami+Nagar,+Shobhagpura,+Udaipur,+Rajasthan+313001/@24.6082862,73.7048721,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!2m2!1d73.7099974!2d24.6140247?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

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