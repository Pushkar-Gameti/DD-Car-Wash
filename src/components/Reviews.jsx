import {
  ExternalLink,
  Star,
  MessageCircle,
} from "lucide-react";

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/DD+Car+Wash/@24.6140247,73.7099974,17z/data=!4m8!3m7!1s0x3967e5ba132fd389:0xe20d1651c4cadb86!8m2!3d24.6140247!4d73.7099974!9m1!1b1!16s%2Fg%2F11yxc345yw?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

export default function Reviews({ t }) {
  return (
    <section id="reviews" className="reviews-section">
      <div className="container reviews-container">

        <div className="reviews-heading">

          <div className="eyebrow dark">
            <span />
            {t.eyebrow}
          </div>

          <h2>
            {t.title}
          </h2>

          <p>
            {t.description}
          </p>

        </div>

        <div className="reviews-box">

          <div className="google-icon">
            G
          </div>

          <div className="reviews-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                fill="currentColor"
              />
            ))}
          </div>

          <h3>
            {t.heading}
          </h3>

          <p>
            {t.text}
          </p>

          <div className="reviews-buttons">

            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              <ExternalLink size={18} />
              {t.read}
            </a>

            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn review-outline"
            >
              <MessageCircle size={18} />
              {t.write}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}