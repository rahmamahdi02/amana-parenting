import { benefits } from "../data";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

export default function Benefits() {
  
  return (
    <section id="benefits" className="bg-offWhite1" >
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
          <h2><span className="text-primaryColor font-bold">Stepping into the leadership
          </span> that Allah has blessed you with.</h2>
          <p>Amana Parenting is a parenting service offering a more peaceful, sunnah-centered approach to raising your children. Our mission is to help empower moms, like you, fulfill the “Amana” - the responsibility of guiding and safekeeping our children.</p>
          <p>These are the 6 pillars we'll build together.</p>
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <Card key={index} icon={item.benefitIcon} title={item.benefitTitle} desc={item.benefitDesc}/>
          ))}
        </div>
      </div>
    </section>
  );
}
