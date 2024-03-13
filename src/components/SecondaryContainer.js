import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
const SecondaryContainer = () => {
  const movie = useSelector(appStore => appStore.movie);

  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-72 pl-1 md:pl-12 relative z-20'>
        <MovieList title="Now Playing" movies={movie?.nowPlayingMovies}/> 
        <MovieList title="Trending" movies={movie?.trendingMovies}/>  
        <MovieList title="Popular" movies={movie?.popularMovies}/>     
        <MovieList title="Top Rated" movies={movie?.topRatedMovies}/>
        <MovieList title="UpComing" movies={movie?.upComingMovies}/>
      </div>
    </div>

  )
}

export default SecondaryContainer