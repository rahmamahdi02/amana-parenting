import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  return (
    <section id="hero" className="relative">
        <img className='absolute inset-0 w-full h-full object-cover -z-[2]' src={heroBg} alt="" />
        <div className="bg-black/35 absolute inset-0 -z-[1]"></div>
        <div className="wrapper flex items-center min-h-screen text-white ">
            <div className="max-w-[400px] sm:max-w-[550px] sm:pt-[150px] sm:pb-[60px]">
                <h1>Are you <span className='text-primaryColor font-bold'>ready to</span> thrive in your role as a mother</h1>
                <p className="my-6">Create more joy and confidence while guiding your children with love, kindess, and firm limits.</p>
                <div>
                    <a href="https://calendly.com/amanaparentcoaching/15min?month=2025-05" className="btn btn-primary">Book Your Clarity Call Today</a>
                </div>
            </div>   
        </div>
    </section>
  )
}