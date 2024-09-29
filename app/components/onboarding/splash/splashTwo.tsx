import Image from 'next/image'
import React from 'react'

const SplashTwo = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mt-28">
                <div>
                    <h2 className="font-semibold text-center w-full text-xl">
                        Crop <span className="text-[#6FA521]">Monitoring</span>{" "}
                        and <span className="text-[#6FA521]">Support</span>
                    </h2>
                    <h2 className="font-semibold text-center w-full text-xl">Services</h2>
                </div>
                <p className="text-sm text-[#323232] font-normal text-center max-w-[353px] sm:max-w-[640px] w-full mx-auto">
                    Farmers can receive real-time advice and tips for their farm produce,
                    enhancing productivity and supporting decision-making
                </p>
                <div className="mt-6">
                    <Image src="/images/splash-img-2.png" alt="splash-img-two" width="100" height="100" className="w-full h-full object-contain rounded-[20px]" />
                </div>
            </div>

        </div>
    )
}

export default SplashTwo