import Image from "next/image";
import React from "react";

const SplashThree = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mt-[76px]">
                <div>
                    <h2 className="font-semibold text-center w-full text-xl leading-[30px]">
                        Market Access and Input Supply
                    </h2>
                </div>
                <p className="text-sm text-[#323232] font-normal text-center max-w-[353px] sm:max-w-[640px] w-full mx-auto leading-[21.02px]">
                    Provide farmers with easy access to market opportunities and essential farming inputs like seeds and fertilizers, streamlining sales processes
                </p>
                <div className="mt-6">
                    <Image src="/images/splash-img-3.png" alt="splash-img-three" width="100" height="100" className="w-full h-full object-contain rounded-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default SplashThree;
