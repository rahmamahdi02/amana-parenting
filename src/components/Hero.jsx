import heroBg from '../assets/heros-bg.webp';
import heroText from '../assets/hero-text.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full aspect-[4/5] md:aspect-[16/9] text-white overflow-hidden"
    >
      {/* Background Image - object aligned right */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-right -z-[2]"
        src={heroBg}
        alt="Hero Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 -z-[1]" />

      {/* Text Image - max height is 2/3 of the hero, centered left */}
      <div className="absolute inset-0 flex items-center justify-start px-4 md:px-16">
        <img
          src={heroText}
          alt="Hero Text"
          className="h-[59%] w-auto max-w-full"
        />
      </div>
    </section>
  );
}
