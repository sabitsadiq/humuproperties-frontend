import Image from 'next/image'
import React from 'react'

const DirectBooking = () => {
    return (
        <div className='w-full relative z-0 bg-white rounded-lg pt-10 shadow-md'>
            <div className='mx-auto md:w-3/5 flex justify-center flex-col items-center'>
                <h2 className='font-semibold text-[28px] text-[#120B59] leading-[40.46px'>Direct booking</h2>
                <p className='font-normal text-xl leading-[28.9px] text-[#141414]/50 w-3/4 my-2 text-center'>Track reservations, view booking details, and optimise your property with ease.
                </p>
                <button className="bg-[#1DDBE7] p-2 rounded-lg w-1/2">Find out more</button>
            </div>
            <div className='relative flex justify-center '>
                <div className='h-[400px] w-[400px] xl:w-[520px] flex items-center justify-center'>
                    <Image src="/images/booking.png" className='w-full h-[400px]' width={400} height={400} alt='booking' />
                </div>

            </div>
        </div>
    )
}

export default DirectBooking