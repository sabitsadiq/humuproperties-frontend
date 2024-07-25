"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='fixed top-0 left-0 shadow-sm w-full h-20 bg-gradient-180 flex justify-center'>
            <div className='rel flex items-center p-2 z-50 justify-between w-11/12 max-w-[1440px]'>

                <div className='text-2xl font-normal leading-[34.68px] text-black'><span className='text-blue-500'>Humu</span>properties</div>
                <div className='hidden lg:flex items-center justify-between gap-[75px]'>
                    <div className='cursor-pointer'>How it works</div>
                    <div className='cursor-pointer'>Features</div>
                    <div className='cursor-pointer'>Pricing</div>
                    <div className='cursor-pointer'>Resources</div>
                </div>
                <div className='hidden lg:flex gap-3 lg:w-1/5'>
                    <button
                        type="submit"
                        className="w-32 h-10 bg-transparent hover:text-white hover:bg-[#120B59]  rounded-lg"
                    >login</button>
                    <button
                        type="button"
                        onClick={() => router.push('/auth/get-started')}
                        className="w-[10rem] h-10 bg-[#120B59] hover:text-[#120B59] hover:bg-transparent hover:border border-[#120B59] rounded-lg text-white"
                    >Get started</button>
                </div>
                <div className='block lg:hidden'>
                    <FiMenu size={24} />
                </div>
            </div>
        </div >
    )
}

export default Navbar