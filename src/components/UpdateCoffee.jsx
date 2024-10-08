import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import img1 from '../assets/more/11.png';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, price, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, price, details, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-opal-omega.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount> 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className=' md:-mt-7 lg:-mt-10 absolute z-10'>
                <img src={img1} alt="" />
            </div>
            <div className='relative z-20 container mx-auto mt-4 md:mt-8 lg:mt-10'>
            <div className='mx-6 md:mx-24'>
                <Link className='' to='/'>
                    <button className='btn btn-outline border-none hover:bg-[#D2B48C] text-[#374151] hover:text-[#374151] font-rancho text-[21px] md:text-[26px]'><FaArrowLeft /> Back to home</button>
                </Link>
                <div className='bg-[#F4F3F0] mt-[20px] md:mt-[35px] lg:mt-[50px] rounded-md pb-[20px] md:pb-[35px] lg:pb-[50px]'>
                    <div className='px-[30px] md:px-[50px] lg:px-[112px]'>
                        <h3 className='font-rancho text-[28px] md:text-[35px] lg:text-[45px] text-[#374151] pt-[30px] md:pt-[40px] lg:pt-[50px] text-center'>Update Existing Coffee Details</h3>
                        <p className='font-raleway text-[12px] md:text-[14px] lg:text-[17px] text-[#1B1A1AB3] mt-2 md:mt-3 lg:mt-6 text-center px-2 lg:px-20 mb-4 md:mb-5 lg:mb-8'>Update your unique coffee blend to our marketplace! Share your coffee's story, flavor notes, and origin. Join our community and let coffee lovers discover your special brew.</p>
                        <form onSubmit={handleUpdateCoffee} className='font-raleway'>
                            <div className='md:flex md:gap-4 lg:gap-6'>
                                <div className="form-control font-raleway w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter coffee name" 
                                    defaultValue={name}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Chef</span>
                                    </label>
                                    <input type="text" name='chef' placeholder="Enter coffee chef"
                                    defaultValue={chef}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                            </div>
                            <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Supplier</span>
                                    </label>
                                    <input type="text" name='supplier' placeholder="Enter coffee supplier"
                                    defaultValue={supplier}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Taste</span>
                                    </label>
                                    <input type="text" name='taste' placeholder="Enter coffee taste" 
                                    defaultValue={taste}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                            </div>
                            <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="Enter coffee price" 
                                    defaultValue={price}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Details</span>
                                    </label>
                                    <input type="text" name='details' placeholder="Enter coffee details" 
                                    defaultValue={details}
                                    className="input w-full text-[14px] md:text-[16px]" required />
                                </div>
                            </div>
                            <div className='mt-3 md:mt-3 lg:mt-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Enter photo URL" 
                                    defaultValue={photo}
                                    className="input w-full text-[14px] md:text-[16px] " required />
                                </div>
                            </div>
                            <input className='mt-4 md:mt-4 lg:mt-6 btn w-full border-2 border-[#331A15] bg-[#D2B48C] font-rancho text-lg md:text-xl lg:text-2xl hover:bg-[#F5F4F1]' type="submit" value="Update Coffee Details" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateCoffee;