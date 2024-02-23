import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import GenereMovieList from "./GenereMovieList";
import Footer from "./Footer";



function Mains() {
  return (
    <div className="md:flex h-full md:h-screen w-full ">
      <div className="">
        <Header />
      </div>
      <div className="overflow-x-hidden pl-3 md:pl-0">
        <Slider />
       
        <GenereMovieList/>
        <Footer />
      </div>
    </div>
  );
}

export default Mains;
