import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
const dispatch = useDispatch();
  const trendingMovies = useSelector(store => store.movie.trendingMovies);  

  useEffect(()=>{
    !trendingMovies && getTrendingMovies();
  },[])


  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addTrendingMovies(json.results))
  }
}


export default useTrendingMovies;