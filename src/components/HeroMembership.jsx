import heroBg from '../assets/heros-bg.webp';
import heroText from '../assets/hero-text.png';

export default function HeroMembership() {

    return (
      <section
        id="hero"
        className="relative w-full aspect-[4/5] md:aspect-[16/9] text-white overflow-hidden"
      >
        {/* Triangle Background */}
        <div className="absolute inset-0 -z-[2]">
          <div className="triangle-bg w-0 h-0 border-l-[100vw] border-b-[100vh] border-l-[#7E928A] border-b-transparent" />
        </div>
  
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
  