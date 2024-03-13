import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BACKGROUND } from '../utils/constants'


const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='object-cover h-screen md:h-full' src={NETFLIX_BACKGROUND} 
        alt="backgroundImage"
        />
      </div>
      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch