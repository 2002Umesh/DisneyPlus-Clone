// import React from "react";
// import { useState } from "react";
// import MediaCard from "./MediaCard";
// import { NavLink } from "react-router-dom";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
// function MovieCard({ movie }) {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <div
     
//         onMouseEnter={() => setToggle(true)}
//         onMouseLeave={() => setToggle(false)}
//       >
//         <section className="hover:scale-110 transition-all duration-150 ease-in-out">
//           <NavLink to="/Details" state={{ item:movie }}>
//             <img
//               src={IMAGE_BASE_URL + movie.poster_path}
//               className="block md:hidden  w-[110px] md:w-[180px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer"
//             />
//           </NavLink>
//           <img
//             src={IMAGE_BASE_URL + movie.poster_path}
//             className="hidden md:block w-[110px] md:w-[180px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer"
//           />
//           <h2 className=" w-[90px] md:w-[175px] text-white mt-2 ">
//             {movie.title||movie.name}
//           </h2>
//         </section>

//         {toggle && (
//           <div className="hidden md:flex absolute z-1  justify-center items-center pr-16 w-[250px] top-0 ">
            
//             <MediaCard show={movie} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default MovieCard;

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
      >
        <section className="hover:scale-110 transition-all duration-150 ease-in-out">
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
        </section>
        <h2 className=" text-xs md:text-lg w-[90px] md:w-[175px] text-white mt-2 ">
             {movie.title||movie.name}
          </h2>
        {toggle && (
          <div className="hidden md:flex absolute z-1 justify-center items-center pr-16 w-[250px] top-0">
            <MediaCard show={movie} />
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
