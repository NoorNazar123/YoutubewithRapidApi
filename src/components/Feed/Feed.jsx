import React from 'react'
import Sidebar from "./Sidebar"

const Feed = () => {
  return (
    <div className='md:flex bg-black min-h-screen text-white '> 
      <div className='w-[100%] md:w-[20%] flex items-center flex-col justify-between border-r border-gray-500'>
        <div>
           <Sidebar /> 
        </div> 
        <h2 className='text-[14px] leading-[16px] font-[400] px-4 text-center my-4'>
          CopyWrite@2024 <br /> Noor e Nazar
        </h2>
      </div>
      <div className='w-[100%] md:w-[80%] px-4'> 
        <h1 className='text-[45px] leading-[45px] font-[900]'>New <span className='text-red-600'>Video</span></h1> 
        <div className='bg-green-400 my-4'>
          videos
        </div>
      </div>
    </div> 
  )
}

export default Feed
