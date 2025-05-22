import { useState } from "react";
import aboutImg from "../assets/about-img.png";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="o-meni" className="bg-primaryColor-light relative">
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className="flex flex-col items-center md:flex-row gap-8 xl:gap-16">
          {/* Image */}
          <div className="md:w-1/2 h-[500px] rounded-[40px] overflow-hidden">
            <img className="object-cover w-full h-full" src={aboutImg} alt="About Yusur Hassan" />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="mb-4">
              Assalamu{" "}
              <span className="text-primaryColor font-bold">Alaikum Mama!</span>
            </h2>
            <p className="text-xl mb-6">
              Mentor Yusur Hassan - Certified Parent Coach & Founder of Amana Parenting
            </p>
            <p className="mb-6">
              I am Yusur Hassan, the founder of Amana Parenting and I have been on my parenting journey for over 25 + years and homeschooling for 20 years.  As a a certified parenting coach and educator, I have helped countless Muslim mothers  effectively guide and teach their children, all while nuturing loving and lasting relationships with them. I have studied with local scholars in halaqaat, and have taught workshops to hundreds of Muslim Moms both locally and internationally.
            </p>
            <p className="mb-6">
            My mission at Amana Parenting is to provide you with a path that fills your parenting role with more confidence, ease and joy while guiding your children with love, kindness, and firm limits.            </p>

            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              Click to Read Yusur's Story
            </button>
          </div>
        </div>
      </div>

      {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
    <div className="relative bg-primaryColor-light text-black rounded-[40px] max-w-2xl w-full p-8 pt-16 overflow-auto max-h-[90vh] custom-scroll">
      {/* Close Button - Larger, Centered Above Title */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute left-1/2 -translate-x-1/2 top-4 text-[#D4AF37] text-4xl font-bold hover:opacity-80 z-10"
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Modal Content */}
      <h2 className="text-3xl font-serif mb-6 text-center">My Story</h2>
      <div className="space-y-6 text-[17px] leading-relaxed px-2 md:px-4">
        <p>There was a time after my fourth daughter was born, when I felt like I was merely surviving motherhood.</p>
        <p>I thought that if my children would just listen, then I could maintain my calm loving approach, rather than sounding like a drill sergeant.</p>
        <p>I knew it but hadn’t yet internalized it. If we get that our children belong to Allah, then we get that they are whole, and they are not a project for us to fix or control...</p>
        <p>When I learned about the inner-parenting work a.k.a emotional regulation...</p>
        <p>Now I am more confident to parent from a place of tawakul “trust in Allah” and Iman—a beautiful place to parent from.</p>
        <p>And so, I'm dedicated to working with Muslim moms who feel stuck in their parenting...</p>
        <p>As a certified parenting coach and educator, I have helped countless Muslim mothers...</p>
        <p>When my daughters hit their pre-teen years, I reached the breaking point...</p>
        <p>Speaking with a mentor helped me to realize that I am responsible for my own emotional baggage...</p>
      </div>
    </div>
  </div>
)}
    </section>
  );
}
