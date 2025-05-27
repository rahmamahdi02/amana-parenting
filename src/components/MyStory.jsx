import introImg from "../assets/about-img.png";

export default function MyStory() {
  return (
    <section id="Story" className="bg-primaryColor-light relative">
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4 md:px-8">
          {/* Top: Image + Intro */}
          <div className="flex flex-col items-center md:flex-row gap-8 xl:gap-16">
            {/* Image */}
            <div className="md:w-1/2 h-[500px] rounded-[40px] overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={introImg}
                alt="About Yusur Hassan"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="mb-4">
              Sharing{" "}
                <span className="text-primaryColor font-bold">
                  My Journey
                </span>
              </h2>
              <p className="text-xl mb-6">
                There was a time after my fourth daughter was born, when I felt like I was
                merely surviving motherhood.
              </p>
              <p className="text-[17px] mb-4">
                I thought that if my children would just listen, then I could maintain my calm loving approach, rather than
                sounding like a drill sergeant. When my daughters hit their pre-teen
                years, I reached the breaking point.
              </p>
              <p className="text-[17px]">
                I felt there were more power struggles and disconnection in my home instead of the joy and peace that I
                wanted for my family. It was painful to feel like I was failing at my most
                important role: being a mother. Speaking with a mentor helped me to
                realize that I am responsible for my own emotional baggage, my ability to
                manage my parenting triggers.
              </p>
            </div>
          </div>

          {/* Full Width Story Text - matches width of top section */}
          <div className="text-[17px] leading-relaxed space-y-6">
            <p>
              My mentor reminded me of an important truth: children are an “amana” — a trust from Allah — and they belong to Him
              alone!My mission at Amana Parenting is to provide you with a path that fills
              your parenting role with more confidence, ease and joy while guiding your
              children with love, kindness, and firm limits. I knew it but hadn’t yet internalized it. If we get that 
              our children belong to Allah, then we get that they are whole, and they are not a project for us to fix
              or control. We can lovingly but firmly guide them rather than fix them.
            </p>
            <p>
              When I learned about the inner-parenting work a.k.a emotional regulation and
              the shifting of parenting mindsets, I realized that I needed to get curious
              and not furious in order to understand their behavior. I was able to come
              from a place of empathy and connection in my interactions with my children
              while still providing healthy guidelines. I experienced more joy with my
              children, while trusting in Allah’s perfect plan for them.
            </p>
            <p>
              Now I am more confident to parent from a place of <em>tawakul</em> — “trust in
              Allah” — and <em>Iman</em> — a beautiful place to parent from.
            </p>
            <p>
              And so, I'm dedicated to working with Muslim moms who feel stuck in their
              parenting, who want so badly to fulfill this beautiful <em>amana</em> but who do
              not know how to confidently and easily address their parenting challenges.
            </p>
            <p>
              As a certified parenting coach and educator, I have helped countless Muslim
              mothers effectively guide and teach their children, all while nurturing
              loving and lasting relationships with them. I have studied with local
              scholars in halaqaat, and have taught workshops to hundreds of Muslim moms
              both locally and internationally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



