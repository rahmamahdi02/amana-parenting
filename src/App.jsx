// App.jsx

import { useState } from "react";
import Hero from "./components/Hero";
import Treatmants from "./components/Treatmants";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import Cta from "./components/Cta";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";
import MarqueeImage from "./components/MarqueeImage";
import Testimonials from "./components/Testimonials";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // open menu
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
  // close menu
  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <>
      <Navbar openMenu={openMenu} isOpen={isMenuOpen}/>
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <Counter/>
        <Benefits />
        <MarqueeImage/>
        <About />
        <Treatmants />
        <Faq />
        <Cta/>
        <Contact />
        <Testimonials />
        <MarqueeImage/> 
        <Connect/>
        <Footer />
      </main>
    </>
  );
}

export default App;
