import {
  CarFront,
  Droplets,
  Sparkles,
  Bike,
  ShieldCheck,
  Clock
} from "lucide-react";

const PHONE = "9983898084";
const WHATSAPP = `https://wa.me/91${PHONE}`;

const services = [
  {
    icon: CarFront,
    title: "Exterior Car Wash",
    price: "₹150-200",
    text: "Exterior wash for all car types."
  },
  {
    icon: Droplets,
    title: "Full Car Wash",
    price: "₹300–₹400",
    text: "Complete wash, excluding polish."
  },
  {
    icon: Sparkles,
    title: "Full Wash + Polish",
    price: "₹400–₹450",
    text: "Full wash with a polished finish."
  },
  {
    icon: Bike,
    title: "Bike Wash",
    price: "₹60",
    text: "Quick and careful bike cleaning."
  },
  {
    icon: Sparkles,
    title: "Bike Wash + Polish",
    price: "₹80",
    text: "Wash plus polish for extra shine."
  }
];

export default function Services() {
  return (
    <>
      <section className="trust-strip">
        <div className="container trust-grid">
          <div><ShieldCheck /><span><b>Affordable</b><small>Local pricing</small></span></div>
          <div><Sparkles /><span><b>Clean Finish</b><small>Careful service</small></span></div>
          <div><CarFront /><span><b>All Car Types</b><small>Hatchback to Luxury</small></span></div>
          <div><Clock /><span><b>Open Daily</b><small>9 AM – 6 PM</small></span></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow dark"><span /> Our Services</div>
            <h2>Everything Your Vehicle Needs</h2>
            <p>Choose a simple wash or add polish for that extra shine.</p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, price, text }) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <div className="service-price">{price}</div>
                <p>{text}</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  Book service →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}