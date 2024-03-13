import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movie.trailerVideo);


    useEffect(()=>{
      !trailerVideo && getMovieVideosById();
    },[])
  
    const getMovieVideosById = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
  
      const filterData = json.results.filter(video => video.type==="Trailer")
      const trailer = filterData.length ? filterData[0] : json.results[0];
    //   console.log("Added trailer");
      dispatch(addTrailerVideo(trailer));
    }
}

export default useMovieTrailer