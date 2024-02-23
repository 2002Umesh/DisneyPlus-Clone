import axios from "axios";

const api_key='b1f0abf698a6e6e6b9c3c559900fe4ca'

const movieBaseUrl="https://api.themoviedb.org/3"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const latestMoviesUrl="https://api.themoviedb.org/3/movie/now_playing?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf"

const latestTvUrl="https://api.themoviedb.org/3/trending/tv/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf"

//https://api.themoviedb.org/3/trending/all/day?api_key=b1f0abf698a6e6e6b9c3c559900fe4ca

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getLatestMovies=axios.get(latestMoviesUrl);
const getLatestTv=axios.get(latestTvUrl);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getLatestMovies,
    getLatestTv
}