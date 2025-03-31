import React from 'react'
import InputField from './InputField'

const MainContainer = () => {
  return (
    <div className='flex flex-row h-screen w-full'>
        <div className='bg-red-400 w-full'>
            
        </div>
        <div className='flex w-full justify-center items-center'>
            <InputField />
        </div>
    </div>
  )
}

export default MainContainer