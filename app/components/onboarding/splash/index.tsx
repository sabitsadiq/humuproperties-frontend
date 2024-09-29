"use client"
import React, { useState } from 'react'
import SplashOne from './splashOne'
import SplashTwo from './splashTwo'
import SplashThree from './splashThree'

const Splash = () => {
    const [currentSplash, setCurrentSplash] = useState(0); // Track the current splash (0 for SplashOne)

    const handleNext = () => {
        if (currentSplash < 2) {
            setCurrentSplash(prev => prev + 1); // Move to the next splash screen
        }
    };

    const progressBarWidth = (currentSplash + 1) * 33.33;
    return (
        <div className='px-4 h-screen'>
            {currentSplash === 0 && <SplashOne />}
            {currentSplash === 1 && <SplashTwo />}
            {currentSplash === 2 && <SplashThree />}

            {/* Progress bar */}
            <div className='w-[87px] h-1 mx-auto my-4 rounded-[3px] bg-[#D9D9D9]'>
                <div className='bg-[#6FA521] h-full' style={{ width: `${progressBarWidth}%` }}></div>
            </div>
            <div className='mt-12 flex flex-col w-full items-center font-medium text-base'>
                <button
                    className='text-white text-center rounded-[10px] p-4 bg-[#6FA521] w-full'
                    onClick={handleNext}
                >
                    {currentSplash < 2 ? 'Next' : 'Finish'} {/* Change button text on the last screen */}
                </button>
                <p className='text-[#6FA521] text-center w-full p-4'>Skip</p>
            </div>
        </div>
    )
}

export default Splash