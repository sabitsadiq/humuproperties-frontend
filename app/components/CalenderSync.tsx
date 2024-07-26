import Image from 'next/image'
import React from 'react'

const CalenderSync = () => {
    return (
        <div className='w-full relative z-0 bg-white rounded-lg pt-10 shadow-md'>
            <div className='mx-auto md:w-3/5 flex justify-center flex-col items-center'>
                <h2 className='font-semibold text-[28px] leading-[40.46px'>Global exposure</h2>
                <p className='font-normal text-xl leading-[28.9px] text-[#141414]/50 w-3/4 my-2 text-center'>We can list your property on over 30 channels, including Airbnb, Expedia, and Booking.com.
                    Find out more
                </p>
                <button className="bg-[#F7D10B] p-2 rounded-lg w-1/2">Find out more</button>
            </div>
            <div className='relative flex justify-center '>
                <div className='h-[400px] w-[400px] flex items-center justify-center'>
                    <Image src="/images/glorb.png" className='w-[400px] h-[400px]' width={400} height={400} alt='globe' />
                </div>
                <div className="absolute bottom-2 left-0 flex justify-center w-full h-1/2">
                    <div className='w-4/5 md:w-1/2 h-full'>
                        <div className='flex w-full justify-between'>
                            <Image src="/images/airbnb.png" width={97} height={90} alt='airbnb' />
                            <Image src="/images/flight.png" width={97} height={90} alt='airbnb' />
                        </div>
                        <div className='flex justify-center w-full'>
                            <Image src="/images/sunshine.png" width={97} height={90} alt='airbnb' />
                        </div>
                    </div></div>
            </div>
        </div>
    )
}

export default CalenderSync