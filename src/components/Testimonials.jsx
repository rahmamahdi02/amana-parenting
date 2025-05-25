import { useState, useEffect } from "react";
import img1 from "../assets/aa-testimonial.png";
import img2 from "../assets/an-testimonial.png";
import img3 from "../assets/umenda-testimonial.png";
import img4 from "../assets/jameela-testimonial.png";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="Testimonials">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>  <span className="text-primaryColor font-bold">Learn what Muslims Moms have said about{" "}</span>
             working with Yusur:          
          </h2>
          <p className="text-xl mb-6">
            Join a nurturing, Sunnah-based parenting community designed to
            support Muslim moms in building peaceful, purposeful homes.
          </p>
        </SectionTitle>

        <div className="space-y-10">
          <div className="flex justify-center relative">
            <div className="relative w-full max-w-2xl aspect-[4/3] overflow-visible rounded-xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`carousel ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Unicode Arrows */}
              <button
                onClick={handlePrev}
                className="absolute -left-14 top-1/2 -translate-y-1/2 text-[#D4AF37] bg-white/70 hover:bg-white rounded-full p-3 text-2xl font-bold shadow-lg"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-14 top-1/2 -translate-y-1/2 text-[#D4AF37] bg-white/70 hover:bg-white rounded-full p-3 text-2xl font-bold shadow-lg"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-primaryColor" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
