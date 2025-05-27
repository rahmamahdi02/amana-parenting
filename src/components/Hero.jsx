import heroBg from '../assets/heros-bg.webp';
import heroText from '../assets/hero-text.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full 
        aspect-[3/4]  /* shorter aspect ratio on small screens */
        md:aspect-[16/9]  /* original wider on md and above */
        text-white overflow-hidden
        py-0 /* remove vertical padding */
      "
    >
      {/* Background Image - hidden below md */}
      <img
        className="absolute inset-0 w-full h-full object-cover object-right -z-[2] hidden md:block"
        src={heroBg}
        alt="Hero Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15 -z-[1]" />

      {/* Text Image - max height is 2/3 of the hero, centered left */}
      <div className="absolute inset-0 flex items-center justify-start px-2 md:px-8">
        <img
          src={heroText}
          alt="Hero Text"
          className="h-[59%] w-auto max-w-full"
        />
      </div>
    </section>
  );
}
