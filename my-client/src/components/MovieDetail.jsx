import React from "react";
import { useLocation } from "react-router-dom";
import ViewMovie from "./ViewMovie";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieDetail() {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className="h-screen grid md:grid-cols-2"
      style={{
        backgroundImage: `linear-gradient(to left,rgba(0,0,0,1),rgba(0,0,0,0.1)),url(${
          IMAGE_BASE_URL + location.state.item.backdrop_path
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: ""
      }}
    >
      <div className="h-full bg-cover bg-center md:w-2/3 pt-[300px] md:pt-[200px] pl-5">
        <h1 className="text-lg md:text-3xl">{location.state.item.name || location.state.item.title}</h1>
        <h2 className="pt-1 text-xs">{location.state.item.release_date}</h2>

        <div className="hidden md:block pt-1 font-thin md:font-normal">
          {location.state.item.overview.slice(0, 150)}...
        </div>
        <div className="block md:hidden pt-1 text-xs md:text-lg">
          {location.state.item.overview.slice(0, 100)}...
        </div>

        <ViewMovie movieId={location.state.item.id} />
      </div>
      <div className=" md:w-1/3"></div>
    </div>
  );
}

export default MovieDetail;
