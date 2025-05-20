import heroBg from '../assets/heros-bg.webp';
import heroText from '../assets/hero-text.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-[2]"
        src={heroBg}
        alt=""
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 -z-[1]"></div>

      {/* Centered Content */}
      <div className="w-[90vw] max-w-[800px] px-4 pt-[150px] pb-[60px]">
        <img
          src={heroText}
          alt="Hero Text"
          className="w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
}
