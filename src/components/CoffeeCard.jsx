import React from 'react';
import PropTypes from 'prop-types';
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, price, details, photo } = coffee;
    return (
        <div className='bg-[#F5F4F1] rounded-[10px]'>
            <div className="flex flex-row justify-evenly md:gap-2 lg:gap-10 pt-3 md:pt-5  lg:p-8 pb-4 md:pb-8">
                <div className='pt-3 md:pt-5'>
                    <img className='w-[80px] md:w-[100px] lg:w-full h-[150px] md:h-[170px] lg:h-[239px] '
                        src={photo}
                        alt="Coffee" />
                </div>
                <div className="-ml-3 md:-ml-6   mt-[40px] md:mt-[60px] lg:mt-[80px]">
                    <h2 className="text-[13px] md:text-[15px] lg:text-xl text-[#1B1A1A]">Name: <span className='md:ml-1 text-[#5C5B5B]'>{name}</span></h2>
                    <p className="text-[13px] md:text-[15px] lg:text-xl text-[#1B1A1A] mt-1 md:mt-2">Chef: <span className='md:ml-1 text-[#5C5B5B]'>{chef}</span></p>
                    <p className="text-[13px] md:text-[15px] lg:text-xl text-[#1B1A1A] mt-1 md:mt-2">Price: <span className='md:ml-1 text-[#5C5B5B]'>{price} Tk</span></p>
                </div>

                <div className='flex flex-col gap-2 md:gap-3 lg:gap-4  mt-[25px] md:mt-[38px] lg:mt-[55px] '>
                    <IoEye className='bg-[#D2B48C] text-white text-[30px] lg:text-[40px] p-1 lg:p-2 rounded-[5px]' />
                    <MdEdit className='bg-[#3C393B] text-white text-[30px] lg:text-[40px]  p-1 lg:p-2 rounded-[5px]' />
                    <MdDelete className='bg-[#EA4744] text-white text-[30px] lg:text-[40px] p-1 lg:p-2 rounded-[5px]' />
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
};

export default CoffeeCard;