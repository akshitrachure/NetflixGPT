import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-36 md:w-44 pr-2'>
        <img className='h-52 w-44 rounded-sm' alt="movie card" src={IMAGE_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard