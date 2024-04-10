import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { BsCheck2All } from "react-icons/bs";
import ViewMovie from "./ViewMovie";
import { NavLink } from "react-router-dom";
const screenWidth = window.innerWidth;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
// import img from "../assets/images/img.jpg";

function Slider() {
  const [movieList, setMovieList] = useState([]);

  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  const [mark, setMark] = useState(false);

  const [imG, setImg] = useState(
    "https://image.tmdb.org/t/p/original/u3ySnWqSjM3jedYgJZTR7RWRDDm.jpg"
  );

  // const [id,setId]=useState([{
  //   Id:id
  // }])
  const [Id, setId] = useState("122226");
  const [title, setTitle] = useState("Echo");
  const [name, setName] = useState("Echo");
  const [date, setDate] = useState("2023-11-08");
  const [content, setContent] = useState(
    "Pursued by Wilson Fisk's criminal empire, Maya's journey brings her home and she must confront her own family and legacy."
  );

  return (
    <div
      className="h-auto  md:h-screen  w-auto md:w-screen  bg-cover bg-center grid md:grid-cols-2"
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.5)),url(${imG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="my-[100px] md:w-1/3 md:my-[190px]">
        <h1>{title || name}</h1>
        <h2>{date}</h2>

        <div className="hidden md:block">{content.slice(0, 100)}...</div>
        <div className="block md:hidden">{content.slice(0, 80)}...</div>
        <div className="flex gap-3">
          <ViewMovie movieId={Id} />

          {/* <button
            className=" hidden md:block"
            onClick={() => {
              setMark(!mark);
            }}
          >
            {mark ? <BsCheck2All /> : "+"}
          </button> */}
        </div>
      </div>

      <div className="hidden md:block md:w-2/3 relative">
     
        <HiChevronLeft
          className=" md:block text-white text-[30px] absolute mx-16 mt-[525px] cursor-pointer"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className=" md:block text-white text-[30px] absolute mr-1 mt-[525px] cursor-pointer right-0"
          onClick={() => {
            sliderRight(elementRef.current);
          }}
        />

        <div
          className="flex overflow-x-auto  px-16 mt-[500px]   scrollbar-hide scroll-smooth "
          ref={elementRef}
        >
          {movieList.map((item, index) => (
            <img
              onClick={() => {
                setImg(IMAGE_BASE_URL + item.backdrop_path);
                setTitle(item.title);
                setName(item.name);
                setDate(item.release_date);
                setContent(item.overview);
                setId(item.id);
              }}
              src={IMAGE_BASE_URL + item.backdrop_path}
              className=" h-[80px] object-cover object-right-top mr-2 rounded-md hover:border-[3.5px] border-gray-300 transition-all duration-100 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
