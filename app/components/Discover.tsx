import React from 'react'
import { discoverCardData } from '../assets/data';
import DiscoverCard from './DiscoverCard';
import Image from 'next/image';

const Discover = () => {
    return (
        <section className='bg-[#120B59] w-full mt-10 pt-[81px] pb-10'>
            <div className='flex flex-col lg:flex-row gap-9 text-white w-11/12 mx-auto  max-w-[1440px]'>
                <div className='w-full lg:w-[42%]'>
                    <h2 className=' font-medium leading-[57.8px] text-5xl '>Discover why thousands of hosts choose humu- properties</h2>
                    <p className='font-normal text-2xl leading-[34.68px] mt-2'>We can help you maximise the potential of your property, no matter where you are on your hosting journey.
                    </p>
                    {/* <button className="bg-white w-[251px] h-[70px] text-[#120B59] text-lg leading-[26.01px] mt-10 rounded-lg">How it works</button> */}
                </div>
                <div className='w-full lg:w-[50%]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                        <div className='p-5 w-[ bg-white rounded-lg'>
                            <div className='flex items-start justify-between'>
                                <Image src="/images/discoverImg.png" width={80} height={80} alt='cardImg' />
                                <div className='text-2xl leading-[34.68px] text-black'>01</div>
                            </div>
                            <h2 className='text-[#120B59] text-3xl leading-[40.46px]'>Start</h2>
                            <p className='font-normal text-xl leading-[28.9px] opacity-50 text-[#141414]'>Starting and growing a rental business can be a complex process. We&rsquo;re at hand to help you build and maintain a successful rental business.</p>
                        </div>
                        <div className='p-5 w- bg-white rounded-lg'>
                            <div className='flex items-start justify-between'>
                                <Image src="/images/discoverImg.png" width={80} height={80} alt='cardImg' />
                                <div className='text-2xl leading-[34.68px] text-black'>02</div>
                            </div>
                            <h2 className='text-[#120B59] text-3xl leading-[40.46px]'>Promote</h2>
                            <p className='font-normal text-xl leading-[28.9px] opacity-50 text-[#141414]'>Starting and growing a rental business can be a complex process. We&rsquo;re at hand to help you build and maintain a successful rental business.</p>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center mt-4'>
                        <div className='p-5 w-full md:w-1/2 bg-white rounded-lg'>
                            <div className='flex items-start justify-between'>
                                <Image src="/images/discoverImg.png" width={80} height={80} alt='cardImg' />
                                <div className='text-2xl leading-[34.68px] text-black'>03</div>
                            </div>
                            <h2 className='text-[#120B59] text-3xl leading-[40.46px]'>Manage</h2>
                            <p className='font-normal text-xl leading-[28.9px] opacity-50 text-[#141414]'>Starting and growing a rental business can be a complex process. We&rsquo;re at hand to help you build and maintain a successful rental business.</p>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Discover