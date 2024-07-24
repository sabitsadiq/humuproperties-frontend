import React from "react";

const YourPropertiesLocations = () => {
    return (<div className="w-11/12 pb-20">
        <div className="w-full flex flex-col items-center justify-center">
            <h2 className="font-semibold text-5xl leading-[69.38px] text-[#120B59]">Where&rsquo;s Your property Located</h2>
            <p className="text-[#141414] md:w-1/2 max-w-[690px] text-center opacity-80 font-normal text-2xl leading-[34.68px]">Your address is only shared with guests after they&apos;ve made a reservation</p>
            <div className="w-[340px]">
                <p>Property number</p>
                <input className="w-full outline-none focus:border-blue-500 border border-[#120B59] rounded-lg p-[10px] placeholder:text-[#141414]/50 text-lg my-1" placeholder="House number and street city" />
                <p>Enter your address manually</p>
            </div>
        </div>
    </div>)


}

export default YourPropertiesLocations;