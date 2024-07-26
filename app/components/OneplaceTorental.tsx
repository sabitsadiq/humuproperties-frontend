import React from 'react'
import Image from 'next/image'

const OneplaceTorental = () => {
    return (
        <section className='flex flex-col gap-9 pt-12 pb-10 w-11/12 mx-auto  max-w-[1440px]'>
            <div className='mx-auto md:w-1/2'>
                <h2 className='text-[#120B59] text-center font-medium text-[40px] leading-[56.7px]'>One place to run your rentals</h2>
                <p className='font-normal mx-auto w-4/5  text-[#141414]/50 text-2xl text-center'>Everything you need to host your vacation rental property.</p>

            </div>
            <div className='w-full flex flex-col md:flex-row mt-12'>
                <div className='md:w-1/2 text-[#120B59]  text-lg md:text-[28px] leading-[40.46px]'>
                    <div className='flex flex-col gap-4 md:w-4/5'>
                        <div className='flex gap-4 w-full'>
                            <button className='bg-[#F7D10B] w-full shadow-md rounded-lg p-1 md:p-[10px]'>Global exposure</button>
                            <button className='bg-white shadow-sm rounded-lg p-1 md:p-[10px] w-full'>Calender sync</button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='bg-white shadow-sm rounded-lg p-1 md:p-[10px]'>Management dashboard</button>
                        </div>
                        <div className='flex gap-4 w-full'>
                            <button className='bg-white w-full shadow-sm rounded-lg p-1 md:p-[10px]'>Direct booking</button>
                            <button className='bg-white rounded-lg shadow-sm p-1 md:p-[10px] w-full'>Guest messaging</button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='bg-white rounded-lg shadow-sm p-1 md:p-[10px] w-3/5'>Smart pricing</button>
                        </div>
                    </div>

                </div>
                <div className='w-full mt-4 md:mt-0 md:w-1/2'>
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
                </div>
            </div>
        </section>
    )
}

export default OneplaceTorental