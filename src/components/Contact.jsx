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
          Interested in bringing <span className="font-bold text-primaryColor">Sunnah-Based Parenting Coaching </span> to your community?
          </h2>
          <p> Book Yusur for your next speaking event e.g. workshop, conference and more.</p>
          <p>Whether you host a podcast, organize parenting summits, run an Islamic school, local masjid, or lead a parent support group— Parent Coach Yusur, the founder of Amanah Parent Coaching, is available for speaking engagements, workshops, and collaborative events.</p>   
            
          <a href="mailto:amanaparentcoaching@gmail.com" className="btn btn-primary">
            Contact with Yusur
          </a>
          
          <div className="flex justify-center">
          <img src={speakerEventsImage} alt="Speaking Events" className="max-w-full h-auto" />
        </div>
        </SectionTitle>
        </div>
    </section>
  );
}

