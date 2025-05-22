import { useState, useEffect } from "react";
// Image carousel imports
import img1 from "../assets/aa-testimonial.png";
import img2 from "../assets/an-testimonial.png";
import img3 from "../assets/umenda-testimonial.png";
import img4 from "../assets/jameela-testimonial.png";

export default function Testimonials() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="Testimonials">
    <section className="space-y-10">
      {/* Image Carousel */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl aspect-[4/3] overflow-hidden rounded-xl">
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
    </section>
    </section>
  );
}

