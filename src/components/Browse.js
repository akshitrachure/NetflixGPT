import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';
const Browse = () => {
  const showGptSearch = useSelector(appStore => appStore.gpt.showGptSearch);
  //console.log(showGptSearch);

  // Fetch data from TMDB API and update the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();


  return (
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>) : (
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
        )
        }
    </div>
  )
}

export default Browse