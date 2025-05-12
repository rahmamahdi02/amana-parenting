import { contactInformations } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import speakerEventsImage from "../assets/speaker_events.png"; // adjust the path as needed

export default function Contact() {
  
  console.log("Image path:", speakerEventsImage);

  return (
    <section id="kontakt">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>
            Book Yusur for <span className="font-bold text-primaryColor">Speaking </span> Events
          </h2>
          <p>
            Do you host a podcast? Looking for speakers for your parenting mastermind or summit? Do you have an Islamic school, local masjid or run a group supporting parents?
          </p>
          <p>
            Contact me to speak on Prophetic Positivity in Parenting and How to Calmly Get Your Kids to Listen.
          </p>
          <div className="flex justify-center">
          <img src={speakerEventsImage} alt="Speaking Events" className="max-w-full h-auto" />
        </div>
        </SectionTitle>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {contactInformations.map((item, index) => (
            <Card
              key={index}
              link={item.contactLink}
              icon={item.contactIcon}
              title={item.contactTitle}
              desc={item.contactInformation}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}

