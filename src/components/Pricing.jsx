import { CarFront, Bike, Sparkles } from "lucide-react";

export default function Pricing({ t }) {
  const prices = [
    ["01", t.pricingItems[0][0], t.pricingItems[0][1], t.pricingItems[0][2]],
    ["02", t.pricingItems[1][0], t.pricingItems[1][1], t.pricingItems[1][2]],
    ["03", t.pricingItems[2][0], t.pricingItems[2][1], t.pricingItems[2][2]],
    ["04", t.pricingItems[3][0], t.pricingItems[3][1], t.pricingItems[3][2]],
    ["05", t.pricingItems[4][0], t.pricingItems[4][1], t.pricingItems[4][2]],
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-grid">

        <div className="pricing-copy">

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

          <div className="vehicle-types">

            <span>
              <CarFront size={14} />
              {t.vehicles[0]}
            </span>

            <span>
              <CarFront size={14} />
              {t.vehicles[1]}
            </span>

            <span>
              <CarFront size={14} />
              {t.vehicles[2]}
            </span>

            <span>
              <Sparkles size={14} />
              {t.vehicles[3]}
            </span>

            <span>
              <Bike size={14} />
              {t.vehicles[4]}
            </span>

          </div>
        </div>

        <div className="price-list">

          {prices.map(([number, title, detail, price]) => (
            <div
              className="price-row"
              key={number}
            >

              <span className="number">
                {number}
              </span>

              <div>
                <b>{title}</b>
                <small>{detail}</small>
              </div>

              <strong>{price}</strong>

            </div>
          ))}

          <p className="price-note">
            {t.note}
          </p>

        </div>
      </div>
    </section>
  );
}