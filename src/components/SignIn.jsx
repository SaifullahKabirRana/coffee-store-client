import { Link } from "react-router-dom";
import 'animate.css';

const SignIn = () => {
    return (
        <div>
            <div className="animate__animated animate__zoomIn mx-2 md:mx-0">
                <div className=" mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                    <h2 className="text-[#374151] text-[25px] md:text-[35px] lg:text-[45px] text-center font-rancho font-medium">Sign In</h2>
                    <div className="md:w-3/4 mx-auto -mt-2">
                        <form  className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Password</span>
                                </label>
                                <div className="flex relative">
                                    <input

                                        name="password" placeholder="Password" className="w-full input input-bordered " required />

                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C] text-[#331A15] text-[17px] md:text-[20px] lg:text-[25px] font-semibold font-rancho" >Sign In</button>
                            </div>
                        </form>
                        <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">/Don't have an account? <Link to='/signup' className="text-[#331A15]">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;