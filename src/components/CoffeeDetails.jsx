import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, price, details, photo } = coffee;
    return (
        <div className='container mx-auto mt-4 md:mt-8 lg:mt-10 '>
            <div className='mx-6 md:mx-24 lg:mx-56'>
                <Link className='-ml-2' to='/'>
                    <button className='btn btn-outline border-none hover:bg-[#D2B48C] text-[#374151] hover:text-[#374151] font-rancho text-[21px] md:text-[26px]'><FaArrowLeft /> Back to home</button>
                </Link>
                <div className='bg-[#F4F3F0] rounded-[8px] mt-6 md:mt-9 lg:mt-12 shadow-md'>
                    <div className='flex justify-evenly py-8 md:py-6 lg:py-14'>
                        <div className='w-[45%] md:w-[35%] mt-4 md:mt-0'>
                            <img className='w-[200px] h-[230px] md:h-[340px] lg:h-[440px] md:w-[200px] lg:w-[320px]' src={photo} alt="" />
                        </div>
                        <div className='w-[50%] md:w-[50%] mt-[50px] lg:mt-[80px]'>
                            <h2 className='font-rancho text-[#331A15] text-xl md:text-[25px] lg:text-[36px]'>Niceties</h2>
                            <div className='mt-2 md:mt-3 lg:mt-8 font-raleway text-[13px] md:text-[15px] lg:text-xl'>
                                <h3 className='text-[#1B1A1A] mt-1 font-medium'>Name: <span className='text-[#5C5B5B] ml-1 font-normal'>{name}</span></h3>
                                <p className='text-[#1B1A1A] mt-1 font-medium'>Chef: <span className='text-[#5C5B5B] ml-1 font-normal'>{chef}</span></p>
                                <p className='text-[#1B1A1A] mt-1 font-medium'>Supplier: <span className='text-[#5C5B5B] ml-1 font-normal'>{supplier}</span></p>
                                <p className='text-[#1B1A1A] mt-1 font-medium'>Taste: <span className='text-[#5C5B5B] ml-1 font-normal'>{taste}</span></p>
                                <p className='text-[#1B1A1A] mt-1 font-medium'>Details: <span className='text-[#5C5B5B] ml-1 font-normal'>{details}</span></p>
                                <p className='text-[#1B1A1A] mt-1 font-medium'>Price: <span className='text-[#5C5B5B] ml-1 font-normal'>{price} Tk</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoffeeDetails;