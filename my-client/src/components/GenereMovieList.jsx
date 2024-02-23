import React from 'react'
import GeneresList from '../constant/GeneresList'
import MovieList from './MovieList'

function GenereMovieList() {
  return (
    <>
    <div className="pb-2 md:pb-20">
        {GeneresList.genere.map((item,index)=>index<=4&&(
            <div className='pt-2 md:pt-10'>
                <h2 className='text-[20px] txt-white font-bold'>{item.name}</h2>
                <MovieList genereId={item.id} index_={index}/>
            </div>
        ))}
    </div>
    </>
  )
}

export default GenereMovieList


