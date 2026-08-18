import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      

      <main>
        <Hero />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;