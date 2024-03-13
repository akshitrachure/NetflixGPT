import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-4 md:px-20 absolute text-white bg-gradient-to-r from-black'>
    {/* // <div className='pt-[16%] px-20 absolute text-white'>  */}
       <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-1/4'>{overview}</p>
        <div>
            <button className='text-black bg-white w-20 mt-2 py-1 md:py-2 px-4 md:px-6 text-md font-semibold rounded-md hover:bg-opacity-70'> Play</button>
            <button className='text-white bg-gray-600 w-32 mt-2 ml-4 py-1 md:py-2 px-4 md:px-6 text-md font-semibold rounded-md bg-opacity-50 hover:bg-opacity-80'> More info</button>
        </div>        
    </div>
  )
}

export default VideoTitle