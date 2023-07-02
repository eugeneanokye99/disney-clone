import axios from "axios";

const movieBasedUrl = "https://api.themoviedb.org/3";
const api_key= 'be8ff45f1563d02a330ac6df6d2b703c'

const movieByGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=be8ff45f1563d02a330ac6df6d2b703c"

//https://api.themoviedb.org/3/trending/all/day?api_key=be8ff45f1563d02a330ac6df6d2b703c
const getTrendingVideos = axios.get(movieBasedUrl + "/trending/all/day?api_key="+api_key)
const getMovieByGenreId =(id) => axios.get(movieByGenreBaseUrl+ "&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}