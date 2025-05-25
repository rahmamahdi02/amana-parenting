import backgroundImage from "../assets/membership-background.png";
import SectionTitle from "./SectionTitle";


export default function CtaMembership() {
  return (
    <section
      id="cta-membership"
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Membership Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        style={{ pointerEvents: "none", filter: "brightness(0.6) saturate(0.8)" }}
      />
      <div className="wrapper py-[75px] lg:py-[100px] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <SectionTitle>
        <h2>
            <span className="text-primaryColor font-bold">
              Confident Muslim Mamas Mentorship{" "}
            </span>is for you if:</h2>
            {/* <h2> community is for you if:
          </h2> */}
        </SectionTitle>
          <ul className="space-y-6 text-left pl-8 md:pl-12 list-disc list-inside marker:text-primaryColor">
            <li className="text-2xl leading-snug">
              You’re done with doubt + mom guilt and ready to parent with confidence.
            </li>
            <li className="text-2xl leading-snug">
              You’re tired of reacting in the moment (yelling/snapping) and want to lead with purpose.
            </li>
            <li className="text-2xl leading-snug">
              You’re fed up with modern parenting advice that ignores your faith and values.
            </li>
            <li className="text-2xl leading-snug">
              You feel alone in your parenting journey and need real, supportive sisterhood.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
