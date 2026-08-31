import {
  MapPin,
  Clock,
  Navigation,
} from "lucide-react";

const MAP_URL =
  "https://www.google.com/maps/dir//DD+Car+Wash,+100+Feet+Rd,+behind+Balaji+Medical,+Swami+Nagar,+Shobhagpura,+Udaipur,+Rajasthan+313001/@24.6082862,73.7048721,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!2m2!1d73.7099974!2d24.6140247?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D";

export default function Location({ t }) {
  return (
    <section id="location" className="location-section">

      <div className="container location-grid">

        {/* Map Placeholder */}
        <a
          href="https://maps.app.goo.gl/ShD94PQsg3Mpk3bz6"
          target="_blank"
          rel="noreferrer"
          className="map-placeholder location-map-card"
          aria-label="Open DD Car Wash on Google Maps"
        >
          <MapPin size={42} />

          <span>DD CAR WASH</span>

          <small>Swami Nagar • Udaipur</small>

          <strong>Open in Google Maps →</strong>
        </a>

        {/* Location Content */}
        <div className="location-content">

          <div className="eyebrow dark">
            <span />
            {t.eyebrow}
          </div>

          <h2>
            {t.title}
          </h2>

          {/* Address */}
          <div className="location-detail">

            <MapPin />

            <div>

              <small>
                {t.addressLabel}
              </small>

              <b>
                {t.address}
              </b>

            </div>

          </div>

          {/* Opening Hours */}
          <div className="location-detail">

            <Clock />

            <div>

              <small>
                {t.hoursLabel}
              </small>

              <b>
                {t.hours}
              </b>

            </div>

          </div>

          {/* Directions */}
          <a
            className="btn primary dark-text"
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={18} />
            {t.directions}
          </a>

        </div>

      </div>

    </section>
  );
}