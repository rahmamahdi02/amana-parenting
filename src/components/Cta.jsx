import ctaImg from '../assets/cta-img.png';

export default function Cta() {
  return (
    <section>
      <div className="wrapper">
        <div className="bg-primaryColor-light flex items-center flex-col md:flex-row-reverse rounded-[24px] lg:rounded-[40px] overflow-hidden">
          <div className="md:w-1/2 p-8 lg:p-14 md:py-0 flex flex-col gap-6 items-start">
            <div className='lg:max-w-sm'>
              <h2 className=''>
              Looking for immediate<span className='font-bold text-primaryColor'> support?</span> 
              </h2>
            </div>
            <p>
            Confident Mamas Mentorship is a monthly membership built for Muslim moms who need real-time support, faith-centered guidance, and a community that truly understands.
            </p>
            <p> This is your safe space to exhale, reset, and reconnect—with others and with yourself.</p>
            <a href="/join" className="btn btn-primary">Join the Membership</a>
          </div>
          <div className='aspect-square w-full md:w-1/2 md:h-[500px]'>
            <img className='object-cover w-full h-full' src={ctaImg} alt='Supportive hands symbolizing community and care' />
          </div>
        </div>
      </div>
    </section>
  );
}
