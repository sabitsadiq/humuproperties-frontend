import React from 'react'
import SplashOne from './splashOne'

const Splash = () => {
    return (
        <div className='px-4'>
            <SplashOne />
            <div className='mt-16 flex flex-col w-full items-center font-medium text-base'>
                <button className=' text-white text-center rounded-[10px] p-4 bg-[#6FA521] w-full'>Next</button>
                <p className='text-[#6FA521] text-center w-full p-4'>Skip</p>
            </div>
        </div>
    )
}

export default Splash