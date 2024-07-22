"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
    const [nextTab, setNextTab] = useState()

    const handleShowNextTab = () => {


    }
    return (
        <div className='hero-bg w-full min-h-screen flex justify-center'>
            <div className='w-11/12 pb-20'>
                <h2 className='w-1/2 text-center mx-auto mt-10 font-bold text-[28px] leading-[40.446px]'><span className='text-blue-600'>Humu</span>properties</h2>
                <div className='w-full h-[162px] pt-10 object-cover'>
                    <Image src="/images/getStartedImg.png" width="1237" height={162}
                        className='w-full h-full rounded-lg ' alt='get-started-pic' />
                </div>
                <div className='flex gap-3 w-full mt-20'>
                    <div className='text-[#141414] flex flex-col gap-3 w-[45%]'>
                        <h2 className='font-semibold text-[32px] leadng-[46.24px]'>Unlock the potential of your vacation rental</h2>
                        <p className='opacity-80  text-2xl leading-[34.68px] font-normal'>In just one season our bookings have increased by over 50% with Humushop</p>
                        <button className='rounded-lg p-3 bg-[#120B59] text-white text-lg leading-[26.01px] text-center w-3/4'>Continue</button>
                    </div>
                    <div className='bg-white rounded-lg shadow-md'>
                        <div className='py-10 px-[75px] flex flex-col gap-3'>
                            <div className='flex gap-2 border border-[#F1F1F1] rounded-[12px] w-full p-[15px] items-center'>
                                <div className='h-full'>
                                    <Image src="/images/card.png" width={79} height={90} className="h-full" alt='card' />

                                </div>
                                <div className=''>
                                    <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>A trusted partner to market your vacation rental</h2>
                                    <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>Reach millions of guests - list on 30+ top booking sites with us. Take the pressure off and turn the income on.</p>
                                </div>
                            </div>
                            <div className='flex gap-2 border border-[#F1F1F1] rounded-[12px] w-full p-[15px] items-center'>
                                <div className=''>
                                    <Image src="/images/card.png" width={79} height={79} className="" alt='card' />

                                </div>
                                <div className=''>
                                    <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Easy listing management</h2>
                                    <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>Effortlessly manage all your properties and listings from one place. Save time and cut out admin.</p>
                                </div>
                            </div>
                            <div className='flex gap-2 border border-[#F1F1F1] rounded-[12px] w-full p-[15px] items-center'>
                                <div className=''>
                                    <Image src="/images/card.png" width={79} height={79} className="" alt='card' />

                                </div>
                                <div className=''>
                                    <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Calendar sync across all channels</h2>
                                    <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>Our calendar sync makes double bookings and calendar headaches a thing of the past. You&apos;re in control.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page