import { CheckCircle2, Sparkles } from "lucide-react";

export default function WhyChooseUs({ t }) {
  return (
    <section id="why-us" className="section about-section">
      <div className="container about-grid">

        <div className="about-panel">

          <div className="about-badge">
            <Sparkles />
            DD
          </div>

          <h2>
            {t.title}
          </h2>

          <p>
            {t.description}
          </p>

        </div>

        <div className="feature-grid">

          {t.features.map(([title, text]) => (
            <div
              className="feature"
              key={title}
            >
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