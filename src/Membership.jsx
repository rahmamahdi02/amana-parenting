// Membership.jsx
import Hero from "./components/Hero";
import HeroMembership from "./components/HeroMembership";
import Treatmants from "./components/Treatmants";
import BenefitMembership from "./components/BenefitMembership";
import About from "./components/About";
import FaqMembership from "./components/FaqMembership";
import Testimonials from "./components/Testimonials";
import Counter from "./components/Counter";
import Cta from "./components/Cta";
import Connect from "./components/Connect";
import MarqueeImage from "./components/MarqueeImage";
import Footer from "./components/Footer";
import CtaMembership from "./components/CtaMembership";


function Membership() {

  return (
    <>
    <main>
        <HeroMembership />
        <About />
        <Counter />
        <CtaMembership />
        <Treatmants />
        <BenefitMembership />
        <Testimonials />
        <FaqMembership />
        <MarqueeImage/> 
        <Connect />
        <Footer />
      </main>
    </>
  );
}

export default Membership;
