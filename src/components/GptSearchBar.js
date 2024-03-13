import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';


const GptSearchBar = () => {
    const language = useSelector(store => store.config.language);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
      const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const json = await data.json();
      return(json.results);
    }



    const handleGptSearchClick = async() => {
      //Make an API call to openai to get movie results

      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query:"+ searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: OMG2, OMG, Don, Koi Mil Gaya, Golmaal";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if(!gptResults.choices){
        // Todo: Error handling code
      }

      const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

      // For each movie, call TMDB Search Movie API
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      //above map returns [promise,promise,promise,promise,promise]

      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResults({movieNames:gptMovies, movieResults:tmdbResults}));
    }


  return (
    <div className='p-2 pt-[45%] mb-28 md:mb-0 md:p-[12%] flex justify-center'>
        <form className='w-full md:w-[65%] bg-black bg-opacity-80' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='py-6 px-[30%] text-white font-extrabold text-2xl md:text-4xl'>GPT Search</h1>
            <div className='pt-2 pb-6 px-6 grid grid-cols-12'>
                <input ref={searchText} type='text' className='m-4 p-4 col-span-8 md:col-span-9 rounded-lg' placeholder={lang[language].placeholderText} />
                <button onClick={handleGptSearchClick} className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-4 md:col-span-3 m-4'>{lang[language].search}</button>
            </div>
        </form>
    </div>
  )
}

export default GptSearchBar