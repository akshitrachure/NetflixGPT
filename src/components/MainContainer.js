import React from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MainContainer = () => {
    const movies = useSelector(appStore=>appStore.movie?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[5];
    // console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;

  return (
    <div className='pt-[38%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer