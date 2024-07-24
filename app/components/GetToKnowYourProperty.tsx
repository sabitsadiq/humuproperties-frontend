import React from 'react'

const GetToKnowYourProperty = () => {
    return (
        <div className='w-11/12 pb-20'>
            <div className='flex flex-col md:flex-row gap-3 w-full mt-10'>
                <div className='text-[#141414] flex flex-col gap-3 w-full md:w-[45%]'>
                    <h2 className='font-semibold text-[32px] leadng-[46.24px]'>Getting to know your property.</h2>
                    <p className='opacity-80  text-2xl leading-[34.68px] font-normal'>In just one season our bookings have increased by over 50% with Humushop</p>

                </div>
                <div className='flex md:justify-end w-full'>
                    <div className='py-10 px-[75 flex flex-col gap-3 w-full md:w-4/5'>
                        <h2 className='font-semibold text-[28px] leading-[40.46px] text-[#141414] opacity-70'>What space will guest have?</h2>
                        <div className='flex md:gap-20 flex-col-reverse md:flex-row justify-between border border-[#120B59] rounded-[12px] w-full p-[15px] md:items-center'>
                            <div className=''>
                                <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Private</h2>
                                <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>e.g the whole property to themselves</p>
                            </div>
                            <div className='flex justify-end'>
                                <div className="rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-6 h-6 md:w-[50px] md:h-[50px]">
                                    <div className="rounded-full bg-[#120B59] w-3 h-3 md:w-6 md:h-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex md:gap-20 flex-col-reverse md:flex-row justify-between border border-[#120B59] rounded-[12px] w-full p-[15px] md:items-center'>

                            <div className=''>
                                <h2 className='text-[#000000] font-normal text-2xl leading-[34.68px]'>Shared</h2>
                                <p className='text-[#141414] opacity-50 text-xl font-normal leading-[28.9px]'>e.g just a room within a house</p>
                            </div>
                            <div className='pl-10 flex justify-end '>
                                <div className="rounded-full border cursor-pointer flex items-center justify-center border-[#120B59] w-6 h-6 md:w-[50px] md:h-[50px]">
                                    <div className="rounded-full bg-[#8080808C] w-3 h-3 md:w-6 md:h-6">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className='font-semibold text-[28px] leading-[40.46px] text-[#141414] opacity-70'>What type of property is it?</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>House</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Apartment</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Villa</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Lodge</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Cottage</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Cabin</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Wigwam</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Barn</div>
                            <div className='border border-[#120B59] bg-transparent p-[10px] rounded-xl font-normal text-xl text-center'>Studio</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetToKnowYourProperty 