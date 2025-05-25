// Membership.jsx
import Hero from "./components/Hero";
import HeroMembership from "./components/HeroMembership";
import Treatmants from "./components/Treatmants";
import BenefitMembership from "./components/BenefitMembership";
import About from "./components/About";
import FaqMembership from "./components/FaqMembership";
import Counter from "./components/Counter";
import Cta from "./components/Cta";
import Connect from "./components/Connect";

function Membership() {

  return (
    <>
    <main>
        <Counter />
        <Treatmants />
        <HeroMembership />
        <About />
        <BenefitMembership />
        <Cta />
        <FaqMembership />
        <Connect />
      </main>
    </>
  );
}

export default Membership;
