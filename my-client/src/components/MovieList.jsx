import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';


function MovieList({genereId,index_}) {
    const elementRef=useRef(null);
    // const [toggle,setToggle]=useState(false)
    const [movieList,setMovieList]=useState([])

    useEffect(()=>{
        getMovieByGenereId();
    },[])

    const getMovieByGenereId=()=>{
        GlobalApi.getMovieByGenreId(genereId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=300;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=300;
    }


//     const data=()=>{movieList.map((item,index)=>(
//         <Movies item={item}/>

    
//   ))}

  
  return (
  <>
   
    <div className="relative">

         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`hidden md:block text-[50px] text-white
           p-2 z-10 cursor-pointer 
             absolute ${index_%3==0? 'mt-[30px] md:mt-[80px]':'mt-[60px] md:mt-[150px]'} `}/>


    <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pt-5 px-3 pb-5'>
        {movieList.map((item,index)=>(
              <>
              {index_%3==0? <HrMovieCard  movie={item}/> : <MovieCard movie={item}/>}

              </>
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`hidden md:block text-[50px] text-white 
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_%3==0? 'mt-[30px] md:mt-[80px]':'mt-[60px] md:mt-[150px]'}`}/> 
    </div>
    </>
  )
}

export default MovieList
