import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import { clearAllWatchlist, removeWatchlist } from "../store/slices/UserSlice";
import { MdAutoDelete } from "react-icons/md";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function MyWatchlist() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    // console.log(state.users)
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeWatchlist(id));
  };

  const deleteAll = () => {
    dispatch(clearAllWatchlist());
  };
  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">My Watchlist</h2>
        <div className="md:pt-1 md:pr-1" onClick={() => deleteAll()}>
          <MdAutoDelete size={27} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide gap-2">
        {data.map((item, index) => {
          return (
            <section className="relative">
              <div className="absolute" onClick={() => deleteUser(index)}>
                <TiDelete size={25} style={{ cursor: "pointer" }} />
              </div>
              <NavLink to="/Details" state={{ item: item }}>
                <img
                  className="w-[100px] md:w-[180px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
                  src={IMAGE_BASE_URL + item.poster_path}
                  alt="image"
                />
              </NavLink>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default MyWatchlist;
