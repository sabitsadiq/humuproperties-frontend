import React from 'react'
import Slider from './Slider'
import Carousel from './NewSlider'

const StartPromote = () => {
    return (
        <section className='w-full'>

            <div className='w-11/12 mx-auto max-w-[1440px] mt-5 md:mt-20'>
                <div className='flex flex-col md:flex-row justify-between w-full'>
                    <div className="md:w-[45%] max-w-[594px]">
                        <h2 className='font-semibold  text-[40px]  leading-[57.8px]'>Start, promote, and manage your rental property with <span className='text-[#120B59]'>Humuproperties</span></h2>

                    </div>
                    <div className='md:w-1/5 max-w-[257px] flex items-end'>
                        <p className='text-[#141414] opacity-90 pb-6 text-xl leading-[28.9px] font-normal'>Starting and growing a rental business can be a complex process. </p>

                    </div>
                </div>
                {/* <Slider /> */}
                <Carousel />
            </div>

        </section>
    )
}

export default StartPromote