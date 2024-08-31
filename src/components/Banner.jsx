import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
const Banner = () => {
    return (
        <div className=''>
            <div className="banner-img bg-no-repeat bg-cover bg-center min-h-[33vh] md:min-h-[50vh] lg:min-h-[760px] lg:relative lg:-top-28">
                <div className=" pt-14 md:pt-20 lg:pt-72 pl-12 md:pl-[340px] lg:pl-96 lg:ml-[500px] ">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-rancho">Would you like a Cup of Delicious Coffee?</h3>
                    <p className="text-white font-raleway text-[10px] md:text-[12px] lg:text-[14px] opacity-95 w-[80%] md:w-[95%] lg:w-[60%] mt-2 md:mt-4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn rounded-none btn-sm md:btn-md lg:px-6 text-base md:text-lg lg:text-2xl font-rancho border-none bg-[#E3B577]  mt-4 md:mt-6 lg:mt-8">Learn More</button>
                </div>

            </div>

            <div className="bg-[#ECEAE3]  md:h-[250px] lg:h-[280px] lg:-mt-28">
                	<div className='container lg:mx-auto md:mx-8 pb-4 md:pb-0'>
                        <div className='grid grid-cols-2 md:grid-cols-4 pt-7 md:pt-8 lg:pt-12 pl-10 md:pl-0'>
                        <div className=''>
                            <img className='w-[55px] md:w-[70px]' src={icon1} alt="" />
                             <h2 className='font-rancho text-[25px] md:text-[26px] lg:text-[35px] text-[#331A15] mt-2 md:mt-4'>Awesome Aroma</h2>
                             <p className='font-raleway text-[11px] md:text-[12px] lg:text-[15px] text-[#1B1A1A] mt-0 md:mt-2 w-[80%] md:w-[80%]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className=''>
                            <img className='w-[55px] md:w-[70px]' src={icon2} alt="" />
                             <h2 className='font-rancho text-[25px] md:text-[26px] lg:text-[35px] text-[#331A15] mt-2 md:mt-4'>Awesome Aroma</h2>
                             <p className='font-raleway text-[11px] md:text-[12px] lg:text-[15px] text-[#1B1A1A] mt-0 md:mt-2 w-[80%] md:w-[80%]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className='pt-5 md:pt-0'>
                            <img className='w-[55px] md:w-[70px]' src={icon3} alt="" />
                             <h2 className='font-rancho text-[25px] md:text-[26px] lg:text-[35px] text-[#331A15] mt-2 md:mt-4'>Awesome Aroma</h2>
                             <p className='font-raleway text-[11px] md:text-[12px] lg:text-[15px] text-[#1B1A1A] mt-0 md:mt-2 w-[80%] md:w-[80%]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div className='pt-5 md:pt-0'>
                            <img className='w-[55px] md:w-[70px]' src={icon4} alt="" />
                             <h2 className='font-rancho text-[25px] md:text-[26px] lg:text-[35px] text-[#331A15] mt-2 md:mt-4'>Awesome Aroma</h2>
                             <p className='font-raleway text-[11px] md:text-[12px] lg:text-[15px] text-[#1B1A1A] mt-0 md:mt-2 w-[80%] md:w-[80%]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;