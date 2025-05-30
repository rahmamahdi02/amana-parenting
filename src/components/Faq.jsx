import { useState } from 'react';
import { motion } from 'framer-motion';
import { faq } from "../data";
import SectionTitle from './SectionTitle';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-offWhite1">
      <div className="wrapper my-[75px] lg:my-[100px]">
        <SectionTitle>
        <h2>Common<span className='font-bold text-primaryColor'> Questions</span></h2>
        <p>Have questions? You're not alone. Here are some of the most common questions Muslim moms ask before joining Amana Parenting, so you can move forward with clarity and confidence.</p>
        </SectionTitle>
        <ul>
          {faq.map((item, index) => (
            <li key={index} className="mb-4 rounded-3xl border border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="px-6 py-5 text-left rounded-3xl cursor-pointer w-full flex justify-between items-center  gap-4"
              >
                <h3>{item.question}</h3>
                <div className="relative">
                  <div className="w-[18px] h-[2px] bg-primaryColor rounded-full"></div>
                  <div
                    className={`w-[18px] h-[2px] bg-primaryColor rounded-full absolute top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-0' : 'rotate-90'
                    }`}
                  ></div>
                </div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
