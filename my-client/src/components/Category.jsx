import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";



import marvel from './../assets/images/marvel.png'
import natg from './../assets/images/natg1.png'
import pixar from './../assets/images/pixar1.png'
import starwars from './../assets/images/starwars1.png'

import disney from './../assets/images/disney_logo.png'
import starwarV from './../assets/videos/starwars_video.mp4'
import disneyV from './../assets/videos/disney_video.mp4'
import marvelV from './../assets/videos/marvel_video.mp4'
import nationalGV from './../assets/videos/natgeo_video.mp4'
import pixarV from './../assets/videos/pixar_video.mp4'

function Category() {
  const productionHouseList = [
    { id: 1, video: disneyV ,image: disney},
    { id: 2, video: pixarV ,image: pixar},
    { id: 3, video: marvelV ,image: marvel},
    { id: 4, video: starwarV ,image: starwars},
    { id: 5, video: nationalGV ,image: natg}
  ];

  const videoRefs = productionHouseList.map(() => useRef(null));

  useEffect(() => {
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    });
  }, []);

  return (
    <>
      <div className="flex static h-screen">
        <div className="hidden md:block fixed z-50">
        <Header/>
        </div>
        <div className=" pl-2 md:pl-24 overflow-hidden">
          <div className='flex gap-2 md:gap-5 p-2 pt-7 px-5 md:px-10 md:justify-center '>
            {productionHouseList.map((item, index) =>(
              <div key={item.id} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out relative shadow-xl shadow-gray-800'>
                <video ref={videoRefs[index]} src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-100' />
                <img src={item.image} alt='image' className=' md:w-full z-[1]' />
              </div>
            ))}
          </div>
          <h2 className="text-xl pt-4" >Popular Languages</h2>
          <div className="flex overflow-x-auto h-20 md:h-36 pt-4 pl-3 md:pl-7 gap-5 pb-1 md:pb-2">
            <img className="rounded-lg  hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8137/1498137-a-86c0b069edb0" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6659/1526659-a-7271cf19114e" alt="" />
          </div>
          <h2 className="text-xl pt-4">Popular Genere</h2>
          <div className="flex overflow-x-auto h-20 md:h-36 pt-4 pl-3 md:pl-7 gap-5 pb-1 md:pb-2">
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63" alt="" />
            <img className="rounded-lg hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/8791/1568791-a-e50a43088a1a" alt="" />
          </div>
          <div className="pt-5 pl-3">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
