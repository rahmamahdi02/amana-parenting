import backgroundImage from "../assets/membership-background.jpeg";

export default function CtaMembership() {
  return (
    <section
      id="cta-membership"
      className="bg-primaryColor-light relative overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Membership Background"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl opacity-30 z-0"
        style={{ objectFit: "contain", pointerEvents: "none" }}
      />

      <div className="wrapper py-[75px] lg:py-[100px] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primaryColor-dark">
            This Community is for You If:
          </h2>

          <ul className="text-lg space-y-6 text-left list-disc pl-6 md:pl-12 text-black">
            <li>
              You’re done with doubt + mom guilt and ready to parent with confidence.
            </li>
            <li>
              You’re tired of reacting in the moment (yelling/snapping) and want to lead with purpose.
            </li>
            <li>
              You’re fed up with modern parenting advice that ignores your faith and values.
            </li>
            <li>
              You feel alone in your parenting journey and need real, supportive sisterhood.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
