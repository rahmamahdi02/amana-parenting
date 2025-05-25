// Membership.jsx
import Hero from "./components/Hero";
import HeroMembership from "./components/HeroMembership";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Faq from "./components/Faq";
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
        <Benefits />
        <Cta />
        <Faq />
        <Connect />
      </main>
    </>
  );
}

export default Membership;
