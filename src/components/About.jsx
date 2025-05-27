import { useState } from "react";
import introVideo from "../assets/intro-video.mp4";

export default function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="o-meni" className="bg-primaryColor-light relative">
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className="flex flex-col items-center md:flex-row gap-8 xl:gap-16">
          {/* Video */}
          <div className="md:w-1/2 h-[500px] rounded-[40px] overflow-hidden flex flex-col items-center">
            <video
              className="object-cover w-full h-full"
              src={introVideo}
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <p className="mt-2 text-sm text-center text-gray-600 italic">
              from Instagram <span className="font-semibold">@amana.parenting</span>
            </p>
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
              I am Yusur Hassan, the founder of Amana Parenting and I have been on my parenting journey for over 25 + years and homeschooling for 20 years. As a a certified parenting coach and educator, I have helped countless Muslim mothers effectively guide and teach their children, all while nurturing loving and lasting relationships with them. I have studied with local scholars in halaqaat, and have taught workshops to hundreds of Muslim Moms both locally and internationally.
            </p>
            <p className="mb-6">
              My mission at Amana Parenting is to provide you with a path that fills your parenting role with more confidence, ease and joy while guiding your children with love, kindness, and firm limits.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
            >
              Click to Read Yusur's Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


