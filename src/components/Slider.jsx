/* eslint-disable react/jsx-key */
import{ useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import GlobalAPi from '../Services/GlobalAPi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/"
const screenWitdth = window.innerWidth

function Slider() {
    const[movieList,setMovieList] = useState([])
    const elementRef = useRef(null)
    useEffect(() => {
getTrendingMovies()
},[])
const getTrendingMovies = () => {
    GlobalAPi.getTrendingVideos.then(resp => {
        console.log(resp.data.results)
        setMovieList(resp.data.results)
    })
}

const sliderRight=(element) => {
    element.scrollLeft += screenWitdth-110
}
const sliderLeft=(element) => {
    element.scrollLeft -= screenWitdth-110
}
  return (
    <div>
        <HiChevronLeft 
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'
        onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight 
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
        onClick={() => sliderRight(elementRef.current)}
        />
    <div className='flex overflow-x-auto px-16 w-full py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
        {movieList.map((item) => (
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md 
            hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out ' 
            />
))}
    </div>
    </div>
  )
}

export default Slider