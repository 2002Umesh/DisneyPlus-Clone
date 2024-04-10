import React from "react";
import { useState } from "react";
import MediaCard from "./MediaCard";
import { NavLink } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function MovieCard({ movie }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        className="relative" 
      >
        <section className="hover:scale-110 transition-all duration-150 ease-in-out relative">
          <NavLink to="/Details" state={{ item: movie }}>
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              className="block md:hidden w-[110px] md:w-[180px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
            />
          </NavLink>
          <img
            src={IMAGE_BASE_URL + movie.poster_path}
            className="hidden md:block w-[110px] md:w-[180px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
          />
          <h2 className="text-xs md:text-lg w-[90px] md:w-[175px] text-white mt-2">
            {movie.title || movie.name}
          </h2>
        </section>
        {toggle && (
          <div className="absolute inset-0 hidden md:flex justify-center items-center z-50">
            <MediaCard show={movie} />
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
