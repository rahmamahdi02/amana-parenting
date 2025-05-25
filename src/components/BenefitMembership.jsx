import { benefitMembership as benefitData } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function BenefitMembership() {
  
  return (
    <section id="benefits" className="bg-offWhite1" >
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2>Here are the 4 key Pillars,
         we'll cover in <span className="text-primaryColor font-bold">Confident Muslim Mamas Mentorship:</span> </h2>
          <p className="text-xl mb-6">Join a nurturing, Sunnah-based parenting community designed to support Muslim moms in building peaceful, purposeful homes.
            </p>
          <p>At The Confident Mamas Mentorship, I help moms like you step into their God-given leadership role—trusting Allah, trusting themselves, and raising the next generation with strong hearts, sound minds, and sincere faith</p>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {benefitData.map((item, index) => (
            <Card key={index} icon={item.benefitIcon} title={item.benefitTitle} desc={item.benefitDesc}/>
          ))}
        </div>
      </div>
    </section>
  );
}
