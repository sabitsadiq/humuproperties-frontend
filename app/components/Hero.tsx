import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row gap-9 w-11/12 mx-auto  max-w-[1440px] '>

            {/* <Image
                src="/images/living_room.png"
                alt='global'
                width={700}
                height={700}
            /> */}
            <div className=' block mt-32 xl:max-w-[690px] object-contain w-[700px] h-[720px]'>
                <Image
                    src="/images/livingRoom.png"
                    // fill
                    alt='livingRoom'
                    // sizes='(max-width:690px)'
                    width={700}
                    height={700}
                    className='object-cover rounded-lg '
                />
                {/* <Image src="/images/discoverImg.png" width={700} height={700} alt='cardImg' /> */}
            </div>
            <div className='mt-32 '>
                <div className='mt-16'>
                    <h2 className='font-extrabold text-[64px] max-w-[580px] leading-[92.48px]'>Your home for <span className='text-[#120B59]'>hosting</span></h2>
                    <p className='text-2xl font-normal max-w-[580px] leading-[34.68px] mt-3 mb-6 opacity-50'>Humuproperties is a one-stop shop to streamline your vacation rental property listings, bookings, payments, and more.</p>
                </div>

                <div className='bg-white -translate-x-36 rounded-lg w-[355px] flex items-center h-[104px] px-3 py-2 mt-[117px]'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-[50px] min-h-[86px] rounded-lg bg-[#120B59]'></div>
                        <h5 className='text-[#141414] text-2xl leading-[34.68px]'>List on 30+ top travel sites</h5>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero