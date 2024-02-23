import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import Header from "./Header";
import Footer from "./Footer";

// import "./SearchBar.css";
import { LiaSearchengin } from "react-icons/lia";
// import CloseIcon from "@mui/material/Icon";
import { IoIosNuclear } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Category() {
  const [movieList, setMovieList] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getLatestMovies.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = movieList.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <>
      <div className="h-screen flex static">
        <div className="hidden md:block fixed z-50">
          <Header />
        </div>
        <div className="pl-2 md:pl-24 overflow-x-hidden pt-7 w-full">
          <div className="">
            <div className="search">
              <div className="searchInputs flex pl-5">
                <input className="w-10/12 h-[50px] text-center"
                  type="text"
                  placeholder="Movies,shows and more"
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <div className="searchIcon flex items-center pl-1 ">
                  {filteredData.length === 0 ? (
                    <LiaSearchengin style={{ fontSize: "28px" }}/>
                  ) : (
                    // <CloseIcon id="clearBtn" onClick={clearInput} />
                    <IoIosNuclear style={{ fontSize: "28px" }} id="clearBtn" onClick={clearInput}/>
                  )}
                </div>
              </div>
              
            {filteredData.length !== 0 ?<div className="pt-2"> {filteredData.length != 0 && (
                <div className="dataResult flex flex-wrap">
                  {filteredData.slice(0, 15).map((item, key) => {
                    return (
                     <NavLink to="/Details" state={{item:item}}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                        className=" h-[200px] mr-2 rounded-md hover:border-[3.5px] border-gray-300 p-2"
                      /></NavLink>
                    );
                  })}
                </div>
              )}
          </div>
:

          <div className="flex flex-wrap pl-3 pt-2">
            {movieList.map((item) => (
              <img
                src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                className="h-[100px] md:h-[200px] mr-2 rounded-md hover:border-[3.5px] border-gray-300 p-2"
              />
            ))}
          </div>}

          </div>
          </div>

          <div className="pt-[50px] md:pt-[150px]">
            <Footer />
          </div>


        </div>
      </div>
    </>
  );
}

export default Category;
