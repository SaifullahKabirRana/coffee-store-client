import gallery1 from '../assets/cups/Rectangle 9.png';
import gallery2 from '../assets/cups/Rectangle 10.png';
import gallery3 from '../assets/cups/Rectangle 11.png';
import gallery4 from '../assets/cups/Rectangle 12.png';
import gallery5 from '../assets/cups/Rectangle 13.png';
import gallery6 from '../assets/cups/Rectangle 14.png';
import gallery7 from '../assets/cups/Rectangle 15.png';
import gallery8 from '../assets/cups/Rectangle 16.png';

const CoffeeGallery = () => {
    return (
        <div className="mt-[40px] md:mt-[60px] lg:mt-[100px] container mx-auto">
            <div className="mx-6 md:mx-8 lg:mx-12">
                <div className="text-center">
                    <p className="text-[#1B1A1A] font-raleway text-[12px] md:text-[14px] lg:text-[17px]">Follow Us Now</p>
                    <h2 className="text-[#331A15] font-rancho text-[27px] md:text-[37px] lg:text-[55px] mt-[2px] md:mt-1">Follow on Instagram</h2>
                </div>
                <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-5 mt-5 md:mt-7 lg:mt-10">
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery1} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery2} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery3} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery4} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery5} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery6} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery7} alt="" />
                    <img className='w-[130px] md:w-[200px] lg:w-[340px] h-[100px] md:h-[200px] lg:h-[350px]' src={gallery8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeGallery;