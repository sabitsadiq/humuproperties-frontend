import Image from "next/image";
import React from "react";

const SplashTwo = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mt-[76px]">
                <div>
                    <h2 className="font-semibold text-center w-full text-xl leading-[30px]">
                        Cluster Management
                    </h2>
                </div>
                <p className="text-sm text-[#323232] font-normal text-center max-w-[353px] sm:max-w-[640px] w-full mx-auto leading-[21.02px]">
                    Allow farmers to join Tier1, Tier2, or Tier3 clusters based on their location and crop type
                </p>
                <div className="mt-6">
                    <Image src="/images/splash-img-2.png" alt="splash-img-two" width="100" height="100" className="w-full h-full object-contain rounded-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default SplashTwo;
