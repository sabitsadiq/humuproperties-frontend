import React from 'react'

const Page = () => {
    return (
        <div className='px-4'>
            <h2 className='font-semibold  w-full text-xl leading-[]'>Welcome Back!</h2>
            <p className='text-[#323232] font-normal text-xs leading-[18px]'>Kindly sign in to your account</p>
            <div>
                <form>
                    <div className='w-full bg-red-500'>
                        <label className='text-[#515151] font-medium text-xs'>Email Address/Phone Number</label>
                        <input placeholder='Enter your detail' className='border border-[#E4E3E3] rounded-[10px] p-4 w-full' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page