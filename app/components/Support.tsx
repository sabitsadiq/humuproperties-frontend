import Image from 'next/image'
import React from 'react'

const Support = () => {
    return (
        <section className="bg-[#120B59] w-full mt-10 pt-[81px]">
            <div className="w-11/12 mx-auto max-w-[1440px]">
                <div className='flex flex-col md:flex-row gap-10 text-white md:w-11/12  max-w-[1440px]'>
                    <div>
                        <div className='h-full w-[200px]'>
                            <Image src="/images/support.png" width={200} height={400} alt='support' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='lg:w-4/5 mx-auto flex justify-center flex-col'>
                            <h2 className='font-medium text-center text-[40px] leading-[57.8px]'>The support you need, when you need it</h2>
                            <p className='text-2xl font-normal text-center leading-[34.68px]'>Our knowledgeable team is available to help with any questions you may have.</p>
                            <button className="bg-white rounded-lg mt-10 text-[#120B59] p-3 w-1/2 mx-auto">How it works</button>
                        </div>
                        <div className='flex justify-center pb-5 md:pb-0 md:items-end'>
                            <div className='h-[119px] w-full rounded-lg md:w-[286px]'>
                                <Image src="/images/support_2.png" width={286} height={119} className='w-full h-full object-cover rounded-lg' alt='support' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support