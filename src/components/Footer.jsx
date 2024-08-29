import logo1 from '../assets/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <div className='footer-img mt-8 md:mt-12 lg:mt-24 pb-6 md:pb-9 lg:pb-12'>
        <div className='md:flex '>
          <div className='ml-[30px] md:ml-[35px] lg:ml-[220px] pt-[35px] md:pt-[60px] lg:pt-[100px]'>
            <img className='w-[60px] md:w-[80px]' src={logo1} alt="" />
            <h2 className='font-rancho text-[#331A15] text-[25px] md:text-[35px] lg:text-[45px] mt-3 md:mt-4 lg:mt-6'>Espresso Emporium</h2>
            <p className='font-raleway text-[#1B1A1A] text-[12px] md:text-[14px] lg:text-lg mt-2 md:mt-3 lg:mt-5 md:w-[60%] lg:w-[60%]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className='mt-3 md:mt-5 lg:mt-7 flex gap-2 md:gap-3 lg:gap-4 text-[20px] md:text-[30px] lg::text-[40px] text-[#331A15]'>
              <a href="#"><FaFacebook /></a>
              <a href="#"><BsTwitterX /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
            <p className='font-rancho text-[#331A15] text-[25px] md:text-[35px] lg:text-[45px] mt-3 md:mt-5 lg:mt-7'>Get in Touch</p>
            <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-3 md:mt-5 lg:mt-7'>
              <FaPhone className='text-[#331A15]' />
              <p className='text-[#1B1A1A] font-raleway text-[15px] md:text-[20px]'>+88 01533 333 333</p>
            </div>
            <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-1 md:mt-2 lg:mt-3'>
              <IoMdMail className='text-[#331A15]' />
              <p className='text-[#1B1A1A] font-raleway text-[15px] md:text-[20px]'>info@gmail.com</p>
            </div>
            <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-1 md:mt-2 lg:mt-3'>
              <IoLocationSharp className='text-[#331A15] text-[18px] md:text-[22px]' />
              <p className='text-[#1B1A1A] font-raleway text-[15px] md:text-[20px]'>72, Wall street, King Road, Dhaka</p>
            </div>

          </div>
          <div className='ml-[30px] md:ml-0 mt-[25px] md:mr-14  lg:-ml-48 md:mt-[175px] lg:mt-[220px]'>
            <section className="">
              <form noValidate="" className="space-y-2 md:space-y-4 lg:space-y-6  ">
                <h2 className=" text-[25px] md:text-[35px] lg:text-[45px] font-rancho text-[#331A15] w-full">Connect with Us</h2>
                <div>

                  <input type="text" placeholder="Name" className="input focus:border-none focus:outline-[#E3B577] h-[35px] md:h-[40px] lg:h-[50px] w-[250px] md:w-[280px] lg:w-[450px] text-[13px] md:text-[15px]" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="input focus:border-none focus:outline-[#E3B577] h-[35px] md:h-[40px] lg:h-[50px] w-[250px] md:w-[280px] lg:w-[450px] text-[13px] md:text-[15px]" />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-lg focus:border-none focus:outline-[#E3B577] text-[13px] md:text-[15px] w-[250px] md:w-[280px] lg:w-[450px]"></textarea>
                </div>
                <div>
                  <button className='text-[#331A15] btn rounded-full btn-outline border-2 border-[#331A15] hover:bg-transparent hover:text-[#E3B577] hover:border-[#E3B577] font-rancho text-[18px] md:text-[21px] lg:text-[24px] btn-sm md:btn-md'>Send Message</button>
                </div>
              </form>
            </section>
          </div>
        </div>

      </div>
      <div>
        <div className='footer-img2 bg-cover  h-[30px] md:h-[40px]  lg:h-[50px]'>
          <p className='text-center text-white font-rancho text-sm md:text-lg lg:text-xl pt-1 md:pt-2 lg:pt-3'>Copyright Espresso Emporium ! All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;