import { benefitMembership as benefitData } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function BenefitMembership() {
  
  return (
    <section id="benefits" className="bg-offWhite1" >
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2><span className="text-primaryColor font-bold">Here are the 4 Pillars,
          </span> we build together:</h2>
          <p>Join a nurturing, Sunnah-based parenting community designed to support Muslim moms in building peaceful, purposeful homes.</p>
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
