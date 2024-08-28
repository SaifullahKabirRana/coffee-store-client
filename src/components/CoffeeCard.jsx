import React from 'react';
import PropTypes from 'prop-types';
import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, price,  photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);

                        }
                    })
            }
        });
    }
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
                    <Link to={`/coffeeDetails/${_id}`}>
                        <IoEye className='bg-[#D2B48C] text-white text-[30px] lg:text-[40px] p-1 lg:p-2 rounded-[5px]' />
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <MdEdit className='bg-[#3C393B] text-white text-[30px] lg:text-[40px]  p-1 lg:p-2 rounded-[5px]' />
                    </Link>
                    <MdDelete onClick={() => handleDelete(_id)} className='bg-[#EA4744] text-white text-[30px] lg:text-[40px]  p-1 lg:p-2 rounded-[5px]' />
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object
};

export default CoffeeCard;