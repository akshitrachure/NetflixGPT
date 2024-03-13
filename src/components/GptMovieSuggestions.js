import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const GptMovieSuggestions = () => {
  const {gptMovieNames, gptMovies} = useSelector(store => store.gpt);
  
  if(!gptMovieNames) return null;

  return (
    <div className='p-2 -mt-24 mb-4 mx-4 text-white bg-black bg-opacity-70'>
      <div>
        {gptMovieNames.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={gptMovies[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions