import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
const dispatch = useDispatch();
  const upComingMovies = useSelector(store => store.movie.upComingMovies);  


  useEffect(()=>{
    !upComingMovies && getUpComingMovies();
  },[])


  const getUpComingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpComingMovies(json.results))
  }
}


export default useUpcomingMovies;