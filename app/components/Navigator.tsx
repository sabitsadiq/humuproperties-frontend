import React from 'react'
import { PiArrowUUpLeftThin, PiArrowUUpRightThin } from "react-icons/pi";

const Navigator = ({ handleNextTab, handlePreviousTab, currentTab }: any) => {
    return (
        <div className='w-11/12 py-10 '>
            <div className='flex justify-between items-center'>
                <button className='bg-[#120B59] p-[10px] w-36 rounded-lg text-white flex items-center gap-4 justify-center' onClick={handlePreviousTab}><PiArrowUUpLeftThin />Back</button>
                <button className='bg-[#007AFF] w-36 p-[10px] rounded-lg text-white flex items-center justify-center gap-4' onClick={handleNextTab}>Next<PiArrowUUpRightThin /></button>
            </div>
            <div className='grid grid-cols-4 w-full gap-3 mt-8'>
                <span className='bg-[#D2CEFF]  h-1 rounded-lg'></span>
                <span className={`${currentTab === 1 ? "bg-[#120B59]" : "bg-[#D2CEFF]"} h-1 rounded-lg`}></span>
                <span className={`${currentTab === 2 ? "bg-[#120B59]" : "bg-[#D2CEFF]"} h-1 rounded-lg`}></span>
                <span className={`${currentTab === 3 ? "bg-[#120B59]" : "bg-[#D2CEFF]"} h-1 rounded-lg`}></span>
            </div>
        </div>
    )
}

export default Navigator