import React from 'react'
import Image from 'next/image'
import useShowContainer from '../hooks/useShowContainer'

const WhatAreYouLookingTodo = () => {

    const isVisible = useShowContainer()

    return (
        <div className='w-11/12 pb-20 overflow-hidden'>
            <div className={`${isVisible ? "flex flex-col lg:flex-row gap-3 w-full mt-10 scroll-smooth translate-all delay-100 transition-transform opacity-100 translate-y-0" : "opacity-0 delay-75 blur-0 translate-y-full "} `}>
                <div className='text-[#141414] flex flex-col gap-3 w-full lg:w-[45%]'>
                    <h2 className='font-semibold text-[32px] leadng-[46.24px]'>But first, what are you looking to do?</h2>
                    <p className='opacity-80  text-2xl leading-[34.68px] font-normal'>In just one season our bookings have increased by over 50% with Humushop</p>

                </div>
                <div className='flex justify-end w-full'>
                    <div className='pb-10 px-[75 flex flex-col gap-3'>
                        <div className='flex flex-col md:flex-row gap-2 border border-[#120B59] rounded-[12px] w-full p-[15px] md:items-center'>
                            <div className='h-full flex justify-between'>
                                <Image src="/images/card.png" className="w-12 h-12 md:w-[79px] md:h-[79px]" width={79} height={90} alt='card' />
                                <div className=" md:hidden rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-6 h-6 md:w-[50px] md:h-[50px]">
                                    <div className="rounded-full bg-[#8080808C] w-3 h-3 md:w-6 md:h-6">

                                    </div>
                                </div>

                            </div>
                            <div className=''>
                                <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Advertise my property</h2>
                                <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>I own a property that i want to rent out to potential guests</p>
                            </div>
                            <div className='hidden md:block pl-10'>
                                <div className="rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-[50px] h-[50px]">
                                    <div className="rounded-full bg-[#120B59] w-6 h-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 border border-[#120B59] rounded-[12px] w-full p-[15px] md:items-center'>
                            <div className='h-full flex justify-between'>
                                <Image src="/images/card.png" className="w-12 h-12 md:w-[79px] md:h-[79px]" width={79} height={90} alt='card' />
                                <div className=" md:hidden rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-6 h-6 md:w-[50px] md:h-[50px]">
                                    <div className="rounded-full bg-[#8080808C] w-3 h-3 md:w-6 md:h-6">

                                    </div>
                                </div>

                            </div>
                            <div className=''>
                                <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Book a property</h2>
                                <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>I&rsquo;m looking for a property to stay in for a period of time.</p>
                            </div>
                            <div className='hidden md:block pl-10'>
                                <div className="rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-[50px] h-[50px]">
                                    <div className="rounded-full bg-[#8080808C] w-6 h-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhatAreYouLookingTodo