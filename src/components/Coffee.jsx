import { FiCoffee } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
const Coffee = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    console.log(coffees)

    return (
        <div className="mt-[30px] md:mt-[60px] lg:mt-[100px] container mx-auto">
            <div className="mx-6 md:mx-8 lg:mx-12">
                <div className="text-center">
                    <p className="text-[#1B1A1A] font-raleway text-[10px] md:text-[14px] lg:text-lg">--- Sip & Savor ---</p>
                    <h2 className="font-rancho text-[28px] md:text-[40px] lg:text-[55px] text-[#331A15] md:mt-2">Our Popular Products</h2>
                    <Link to="/addCoffee">
                        <button className="font-rancho rounded-md btn btn-sm md:btn-md bg-[#E3B577] border-2 border-[#331A15] hover:border-[#331A15] text-white text-lg md:text-xl lg:text-2xl hover:bg-[#F5F4F1] hover:text-[#331A15] mt-2 lg:mt-3">Add Coffee <FiCoffee className="text-[#331A15]" /></button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mt-[20px] md:mt-[30px] lg:mt-[45px]">
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Coffee;