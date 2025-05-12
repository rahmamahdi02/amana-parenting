import heroBg from '../assets/heros-bg.png';
import heroText from '../assets/hero-text.png';

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <img className="absolute inset-0 w-full h-full object-cover -z-[2]" src={heroBg} alt="" />
      <div className="bg-black/15 absolute inset-0 -z-[1]"></div>

      <div className="wrapper flex items-center min-h-screen text-white">
        <div className="pt-[150px] pb-[60px] -ml-4 sm:-ml-6">
          <img
            src={heroText}
            alt="Hero Text"
            className="w-[90vw] max-w-[800px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
