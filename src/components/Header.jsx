import React from 'react'
import logo from '../assets/favicon.png'
export const Header = () => {
  return (
    <div className='bg-blue-600 w-full flex items-center px-5 p-2'>

        <div className='flex items-center'>

            <img src={logo} 
                alt="Markme Logo" 
                className='w-[4rem] h-[4rem]'
                />

            <h1 className='font-primary italic text-white text-2xl pl-1'>eme Generator</h1>
        
        </div>

        <div className='font-primary ml-auto text-white'>
            <h1>ReactJS Project</h1>
        </div>

    </div>
  )
}
