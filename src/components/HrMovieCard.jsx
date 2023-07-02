import React from 'react'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"

function HrMovieCard({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL + movie.backdrop_path} 
        className='w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer' />
    </>
  )
}

export default HrMovieCard