import { Link } from "react-router-dom";
import banner from "../../assets/images/banner/banner.jpg";

import BrowseHome from "@/Components/BrowseHome/BrowseHome";
import Owner from "@/Components/Owner/Owner";
import PropertySection from "@/Components/PropertySection/PropertySection";

export const Home = () => {
  return (

    <div className="max-w-full mx-auto px-4 mt-1" >
      
      {/* Banner Section */}
      <div className="relative w-full h-[450px] rounded-b-xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-sm md:text-lg max-w-xl mb-6 opacity-90">
            Discover the best properties with trusted and hassle-free service only on E-Bari.
          </p>

          <div className="flex gap-4 mt-2">
            <Link
              to="/all-properties"
              className="px-5 py-2 bg-green-700 hover:bg-green-800 rounded-md text-white font-medium"
            >
              Explore Properties
            </Link>

            <Link to="/contact">
              <button className="px-5 py-2 bg-white hover:bg-slate-200 text-slate-800 rounded-md font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* offer scroller section */}
      <div className="bg-green-500 w-full h-10 mt-4">
        <marquee behavior="scroll" direction="left">
          <p className="text-white font-bold pt-2">Special Offers Available! Limited Time Only!</p>
        </marquee>
      </div>


      {/* offer card section */}
      <div className="mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <PropertySection />
      </div>


      {/* browse owner section */}
      <div className="mt-20">
        {/* <Owner/> */}
      </div>
    </div>
  );
};
