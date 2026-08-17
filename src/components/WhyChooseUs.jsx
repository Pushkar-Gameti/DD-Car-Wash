import { CheckCircle2, Sparkles } from "lucide-react";

const features = [
  ["Affordable Prices", "Quality car and bike care at practical local prices."],
  ["All Car Types", "Hatchback, Sedan, SUV and Luxury cars welcome."],
  ["Careful Cleaning", "A clean, fresh finish for your vehicle."],
  ["Easy to Reach", "Conveniently located behind Balaji Medical on 100 Feet Road."]
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section about-section">
      <div className="container about-grid">
        <div className="about-panel">
          <div className="about-badge"><Sparkles /> DD</div>
          <h2>Your local stop for a cleaner, shinier ride.</h2>
          <p>
            DD Car Wash focuses on convenient and affordable vehicle
            cleaning for customers around Swami Nagar and 100 Feet Road, Udaipur.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(([title, text]) => (
            <div className="feature" key={title}>
              <CheckCircle2 />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}