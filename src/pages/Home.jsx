import {link} from "react-router-dom";
//import homePageMainImage from '../assets/Image/homePageMainImage.png';
import HomeLayout from "../layout/HomeLayout"
import Footer from "../components/Footer";

function Home(){

return(
    <HomeLayout>
        <div className="pt-10 text-white flex item-center justify-center gap-10 mx-16 h-[90vh]">
            <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">Find out best <span className="text-yellow-500 font-bold">Onlinee Courses </span></h1>
                    <p className="text-xl text-gray-200"> 
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost
                    </p>
                    <div className="space-x-6">
                            <link to="/courses"></link>
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transitionall ease-in-out duration 300">
                                Explore courses
                            </button>
                            <link to="/contacts"></link>
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transitionall ease-in-out duration 300">
                                Conatct Us                           
                                 </button>
                    </div>
        </div>
        <div>
            <img src={homePageMainImage} alt="home page" />
        </div>
        </div>
        <Footer />
    </HomeLayout>
   
)

}

export default Home