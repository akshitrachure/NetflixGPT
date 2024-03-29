import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log(movies);
    // console.log(movies);

  return (
    <div className='px-6'>
        <h1 className='text-lg md:text-xl font-semibold text-white font-serif py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies && movies.map((movie) => <MovieCard key={movie.id} poster_path={movie?.poster_path}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList