import Image from 'next/image'
import React from 'react'

const DiscoverCard = ({ data }: any) => {
    return (
        <div className='p-5 w-[292px] bg-white rounded-lg'>
            <div className='flex items-start justify-between'>
                <Image src={data.img} width={100} height={100} alt='cardImg' />
                <div className='text-2xl leading-[34.68px] text-black'>{data.number}</div>
            </div>
            <h2 className='text-[#120B59] text-3xl leading-[40.46px]'>{data.heading}</h2>
            <p className='font-normal text-xl leading-[28.9px] opacity-50 text-[#141414]'>{data.content}</p>
        </div>
    )
}

export default DiscoverCard