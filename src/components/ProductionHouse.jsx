/* eslint-disable react/jsx-key */
import disney from '../assets/images/disney.png'
import marvel from '..//assets/images/marvel.png'
import pixar from '../assets/images/pixar.png'
import starwars from '../assets/images/starwar.png'
import nationalgeographic from '../assets/images/nationalG.png'

import disneyVideo from '../assets/videos/disney.mp4'
import marvelVideo from '../assets/videos/marvel.mp4'
import pixarVideo from '../assets/videos/pixar.mp4'
import starwarsVideo from '../assets/videos/star-wars.mp4'
import nationalgeographicVideo from '../assets/videos/national-geographic.mp4'


function ProductionHouse() {
    const productionHouse = [
        {
            id: 1,
            image: disney,
            video: disneyVideo,
        },
        {
            id: 2,
            image: marvel,
            video: marvelVideo,
        },
        {
            id: 3,
            image: pixar,
            video: pixarVideo,
        },
        {
            id: 4,
            image: starwars,
            video: starwarsVideo,
        },
        {
            id: 5,
            image: nationalgeographic,
            video: nationalgeographicVideo,
        },
    ]
    return (
        <div className='flex gap-2 md:gap-5 p-2 px-16 md:px-5'>
            {productionHouse.map((item) => (
                <div
                    className='border-[2px] border-gray-600 rounded-lg hover:scale-110 
            transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'
                >
                    <video src={item.video} autoPlay loop playsInline muted
                        className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'
                    />
                    <img src={item.image} className='w-full z-[1] opacity-100' />

                </div>
            ))}
        </div>
    )
}

export default ProductionHouse