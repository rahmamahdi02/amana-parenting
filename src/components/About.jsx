import aboutImg from '../assets/about-img.png';

export default function About() {
  return (
    <section id="o-meni" className='bg-primaryColor-light'>
      <div className="wrapper py-[75px] lg:py-[100px]">
        <div className='flex flex-col items-center md:flex-row gap-8 xl:gap-16'>
        <div className='md:w-1/2 h-[500px] rounded-[40px] overflow-hidden'>
          <img className='object-cover w-full h-full' src={aboutImg} alt="" />
        </div>
        <div className='md:w-1/2'>
          <h2 className='mb-4'>Assalamu <span className='text-primaryColor font-bold'>Alaikum</span> Momma!</h2>
          <p className='text-xl mb-6'>
            Yusur Hassan - Certified Parent Coach & Founder of Amana Parenting
          </p>
          <p className='mb-4'>
          I am Yusur Hassan, the founder of Amana Parenting. and I have been on my parenting journey for over 20 years and homeschooling for 18 years. As a certified parent coach/educator, I have had the pleasure of working with hundreds of Muslim moms individually + in groups and have created a peaceful parenting framework aligned with Prophetic teachings.
          </p>
          <p>
          My mission at Amana Parenting is to provide you with a path that fills your parenting role with more confidence, ease and joy while guiding your children with love, kindness, and firm limits.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
