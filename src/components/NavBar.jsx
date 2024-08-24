import logo from '../assets/more/logo1.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar-img bg-no-repeat bg-center bg-cover min-h-[70px] md:min-h-[90px] lg:min-h-[120px] ">
                <div className='flex justify-center gap-2 md:gap-3 pt-[6px] md:pt-2 lg:pt-4'>
                    <img className='w-[45px] md:w-[60px] lg:w-[75px]' src={logo} alt="" />
                    <h2 className='font-rancho text-[35px] md:text-[50px] lg:text-[60px] text-white'>Espresso Emporium</h2>
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;