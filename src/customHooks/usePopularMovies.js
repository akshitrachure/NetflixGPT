import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store=>store.movie.popularMovies)


  useEffect(()=>{
    !popularMovies && getPopularMovies();
  },[])


  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }
}


export default usePopularMovies;