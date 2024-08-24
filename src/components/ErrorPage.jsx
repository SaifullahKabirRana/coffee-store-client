import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";  
import error from '../assets/404/404.gif'
const ErrorPage = () => {
    return (
        <div>
            <div className='mt-12'>
                <Link className='flex justify-center' to='/'>
                    <button className='btn btn-outline border-none hover:bg-[#D2B48C] text-[#374151] hover:text-[#374151] font-rancho text-[21px] md:text-[26px]'><FaArrowLeft /> Back to home</button>
                </Link>
                <div className='flex justify-center md:mt-12'>
                    <img className='' src={error} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;