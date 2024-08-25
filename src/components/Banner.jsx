
const Banner = () => {
    return (
        <div>
            <div className="banner-img bg-no-repeat bg-cover bg-center min-h-[33vh] md:min-h-[50vh] lg:min-h-[760px] lg:relative lg:-top-28">
                <div className=" pt-14 md:pt-20 lg:pt-72 pl-12 md:pl-[340px] lg:pl-96 lg:ml-[500px] ">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-5xl font-rancho">Would you like a Cup of Delicious Coffee?</h3>
                    <p className="text-white font-raleway text-[10px] md:text-[12px] lg:text-[14px] opacity-95 w-[80%] md:w-[95%] lg:w-[60%] mt-2 md:mt-4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn rounded-none btn-sm md:btn-md lg:px-6 text-base md:text-lg lg:text-2xl font-rancho border-none bg-[#E3B577]  mt-4 md:mt-6 lg:mt-8">Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default Banner;