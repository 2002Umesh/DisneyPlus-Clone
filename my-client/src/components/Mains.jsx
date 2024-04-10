import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import GenereMovieList from "./GenereMovieList";
import Footer from "./Footer";



function Mains() {
  return (
    <div className="md:flex h-full md:h-screen w-full ">
      <div className="z-40">
        <Header />
      </div>
      <div className="overflow-x-hidden pl-3 md:pl-0">
        <Slider />

        <GenereMovieList />
        <div className="mr-3 md:mr-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Mains;
