import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link } from "react-router-dom";
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been created
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt};
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'SignUp Successfully',
                                icon: 'success',
                                confirmButtonText: 'Close'
                            })
                            form.reset();
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="animate__animated animate__zoomIn mx-2 md:mx-0">
                <div className=" mt-7 md:mt-10 lg:mt-16 pt-6 md:pt-10 lg:pt-16 pb-4 md:pb-6 lg:pb-8 shadow-lg bg-[#F3F3F3] rounded-md md:max-w-[750px] mx-auto">
                    <h2 className="text-[#374151] text-[25px] md:text-[35px] lg:text-[45px] text-center font-rancho font-medium">Sign Up</h2>
                    <div className="md:w-3/4 mx-auto -mt-2">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#403F3F] font-semibold text-[16px] md:text-[20px]">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered " />
                            </div>

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
                                <button className="btn bg-[#D2B48C] text-[#331A15] text-[17px] md:text-[20px] lg:text-[25px] font-semibold font-rancho" >Sign Up</button>
                            </div>
                        </form>
                        <p className="-mt-4 text-center text-[#6f7070] text-[13px] md:text-[16px] font-semibold">Already have an account? <Link to='/signin' className="text-[#331A15]">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;