import {
  CarFront,
  Droplets,
  Sparkles,
  Bike,
  ShieldCheck,
  Clock,
} from "lucide-react";

const PHONE = "8890415892";
const WHATSAPP = `https://wa.me/91${PHONE}`;

const icons = [
  CarFront,
  Droplets,
  Sparkles,
  Bike,
  Sparkles,
];

export default function Services({ t }) {
  return (
    <>
      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-grid">

          <div>
            <ShieldCheck />
            <span>
              <b>{t.trustAffordable || "Affordable"}</b>
              <small>{t.trustAffordableSmall || "Local pricing"}</small>
            </span>
          </div>

          <div>
            <Sparkles />
            <span>
              <b>{t.trustClean || "Clean Finish"}</b>
              <small>{t.trustCleanSmall || "Careful service"}</small>
            </span>
          </div>

          <div>
            <CarFront />
            <span>
              <b>{t.trustTypes || "All Car Types"}</b>
              <small>{t.trustTypesSmall || "Hatchback to Luxury"}</small>
            </span>
          </div>

          <div>
            <Clock />
            <span>
              <b>{t.trustOpen || "Open Daily"}</b>
              <small>{t.trustOpenSmall || "9 AM – 6 PM"}</small>
            </span>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">

          <div className="section-heading">

            <div className="eyebrow dark">
              <span />
              {t.eyebrow}
            </div>

            <h2>{t.title}</h2>

            <p>{t.description}</p>

          </div>

          <div className="service-grid">

            {t.items.map(([title, price, text], index) => {
              const Icon = icons[index];

              return (
                <article
                  className="service-card"
                  key={title}
                >

                  <div className="icon-box">
                    <Icon />
                  </div>

                  <h3>{title}</h3>

                  <div className="service-price">
                    {price}
                  </div>

                  <p>{text}</p>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.book}
                  </a>

                </article>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}