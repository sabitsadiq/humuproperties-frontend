"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";



const Page = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };
    return (
        <div className='px-4 mt-10'>
            <FaArrowLeftLong size={24} onClick={handleBack} />
            <h2 className='font-semibold  w-full text-xl leading-[] mt-4'>Welcome Back!</h2>
            <p className='text-[#323232] font-normal text-xs leading-[18px]'>Kindly sign in to your account</p>
            <div className='mt-5'>
                <form className='flex flex-col gap-4'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='email' className='text-[#515151] font-medium text-xs'>Email Address/Phone Number</label>
                        <input placeholder='Enter your detail' className='border border-[#E4E3E3] rounded-[10px] outline-none p-3 w-full placeholder:text-[#B6B6B6] placeholder:text-xs' />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor='password' className='text-[#515151] font-medium text-xs'>Password *</label>
                        <input placeholder='Password' className='border border-[#E4E3E3] rounded-[10px] outline-none p-3 w-full placeholder:text-[#B6B6B6] placeholder:text-xs' />
                        <div className='flex items-center justify-between font-medium text-xs'>
                            <div className='flex items-center gap-2'>
                                <input type='checkbox' className='rounded-md' />
                                <p>Keep me signed in</p>
                            </div>
                            <Link className='text-[#6FA521] ' href="">Forgot Password?</Link>
                        </div>
                        <button
                            className='text-white mt-8 text-center rounded-[10px] p-4 bg-[#6FA521] w-full'
                            type='button'
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page