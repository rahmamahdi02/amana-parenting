import { treatmants } from "../data";
import SectionTitle from "./SectionTitle";

export default function Treatmants() {
  return (
    <section id="tretmani">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>
            <span className="font-bold text-primaryColor">Amana Parenting </span>
            Offers Specialized Support for Mamas
          </h2>
          <p>
            Our services are built to move you...from frustration to joy. from discouraged to encouraged. from disconnected to deeply connected. from mom-guilt to confidence. from surviving to thriving.
          </p>
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {treatmants.map((item, index) => (
            <div
              key={index}
              className="bg-primaryColor-light rounded-[36px] md:rounded-[40px] flex flex-col justify-between gap-4 p-6 md:p-7"
            >
              <h3>{item.treatmantTitle}</h3>
              <p>{item.treatmantDesc}</p>
              <div>
                <p className="font-semibold mb-4">{item.treatmantPrice}</p>

                {item.treatmantTitle === '1:1 Coaching Program' ? (
                  <a
                    href="https://calendly.com/amanaparentcoaching/15min?month=2025-05"
                    className="btn btn-primary"
                  >
                    {item.treatmantButtonText}
                  </a>
                ) : (
                  <a
                    href="/Membership"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {item.treatmantButtonText}
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
