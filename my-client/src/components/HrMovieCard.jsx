import React, { useState } from "react";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function HrMovieCard({ movie }) {
 
  const [showPopup, setShowPopup] = useState(false);
  const [showPop, setShowPop] = useState(false);

  return (
    <div
      className=""
      onClick={() => setShowPop(!showPop)}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <section className="hover:scale-110 transition-all duration-150 ease-in-out">
        <NavLink to="/Details" state={{ item: movie }}>
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="block md:hidden w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
          />
        </NavLink>
        <img
          src={IMAGE_BASE_URL + movie.backdrop_path}
          className="hidden md:block w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        />
        <h2 className="text-xs md:text-lg  w-[110px] md:w-[260px] text-white mt-2">
          {movie.title}
        </h2>
      </section>

      {showPopup && (
        <div className="hidden absolute z-1 md:flex justify-center items-center pl-1 w-[250px] -top-16">
          
          <MediaCard show={movie}  />
        </div>
      )}
    </div>
  );
}

export default HrMovieCard;
