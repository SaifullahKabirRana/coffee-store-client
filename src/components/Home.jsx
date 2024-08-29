import Banner from "./Banner";
import Coffee from "./Coffee";
import CoffeeGallery from "./CoffeeGallery";
import img1 from '../assets/more/1.png';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=" ">
                <img className="absolute z-10" src={img1} alt="" />
                <div className=" relative z-20">
                <Coffee></Coffee>
                </div>
            </div>
            <CoffeeGallery></CoffeeGallery>
        </div>
    );
};

export default Home;