import { CarFront, Bike, Sparkles } from "lucide-react";

const prices = [
  ["01", "Exterior Car Wash", "All car types", "₹150-200"],
  ["02", "Full Car Wash", "Except polish", "₹300–₹400"],
  ["03", "Full Wash + Polish", "Wash with polish", "₹400–₹450"],
  ["04", "Bike Wash", "Basic bike wash", "₹60"],
  ["05", "Bike Wash + Polish", "Wash + polish", "₹80"]
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-grid">
        <div className="pricing-copy">
          <div className="eyebrow"><span /> Straightforward Pricing</div>
          <h2>
            Clean Car.
            <br />
            <em>Fair Price.</em>
          </h2>
          <p>
            No complicated packages. Pick the service that fits
            your vehicle and budget.
          </p>

          <div className="vehicle-types">
            <span><CarFront size={14} /> Hatchback</span>
            <span><CarFront size={14} /> Sedan</span>
            <span><CarFront size={14} /> SUV</span>
            <span><Sparkles size={14} /> Luxury</span>
            <span><Bike size={14} /> Bike</span>
          </div>
        </div>

        <div className="price-list">
          {prices.map(([number, title, detail, price]) => (
            <div className="price-row" key={title}>
              <span className="number">{number}</span>
              <div>
                <b>{title}</b>
                <small>{detail}</small>
              </div>
              <strong>{price}</strong>
            </div>
          ))}
          <p className="price-note">
            * Final car price may vary depending on vehicle size and condition.
          </p>
        </div>
      </div>
    </section>
  );
}