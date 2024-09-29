import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row gap-9 w-11/12 mx-auto  max-w-[1440px] '>

            <div className='mt-32 xl:max-w-[690px] object-contain w-full md:w-[700px] md:h-[619px] lg:h-[720px] min-h-full'>
                <Image
                    src="/images/living.svg"
                    alt='livingRoom'
                    width={700}
                    height={700}
                    className='object-cover w-full h-full rounded-lg'
                />
            </div>
            <div className='md:mt-32 '>
                <div className='md:mt-16'>
                    <h2 className='font-extrabold text-[64px] max-w-[580px] leading-[92.48px]'>Your home for <span className='text-[#120B59]'>hosting</span></h2>
                    <p className='text-2xl font-normal max-w-[580px] leading-[34.68px] mt-3 mb-6 opacity-50'>Humuproperties is a one-stop shop to streamline your vacation rental property listings, bookings, payments, and more.</p>
                    <button
                        type="button"
                        className="w-[10rem] h-10 bg-[#120B59] hover:text-[#120B59] hover:bg-transparent translate-all hover:border border-[#120B59] rounded-lg text-white"
                    >Sign up for free</button>
                </div>

                <div className='bg-white relative z-40 -translate-x-36 rounded-lg w-[355px] hidden md:flex items-center h-[104px] px-3 py-2 mt-9 lg:mt-[90px]'>
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