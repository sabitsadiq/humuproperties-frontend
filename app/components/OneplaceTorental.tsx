"use client";
import React, { useState } from 'react';
import GlobalExposure from './GlobalExposure';
import CalenderSync from './CalenderSync';
import ManagementDashboard from './ManagementDashboard';
import DirectBooking from './DirectBooking';
import GuestMessaging from './GuestMessaging';
import SmartPricing from './SmartPricing';

const OneplaceTorental = () => {
    const option = {
        showGlobalExposure: true,
        showCalenderSync: false,
        showManagementDashboard: false,
        showDirectBooking: false,
        showGuestMessaging: false,
        showSmartPricing: false
    }
    const [showComponent, setShowComponent] = useState<object>(option);

    const handleShowComponent = (id: string) => {
        setShowComponent((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => ({
                ...acc,
                [key]: key === id
            }), {})
        }));
    };



    const ComponentMap: { [key: string]: React.ComponentType } = {
        showGlobalExposure: GlobalExposure,
        showCalenderSync: CalenderSync,
        showManagementDashboard: ManagementDashboard,
        showDirectBooking: DirectBooking,
        showGuestMessaging: GuestMessaging,
        showSmartPricing: SmartPricing

    };

    return (
        <section className='flex flex-col gap-9 pt-12 pb-10 w-11/12 mx-auto  max-w-[1440px]'>
            <div className='mx-auto md:w-1/2'>
                <h2 className='text-[#120B59] text-center font-medium text-[40px] leading-[56.7px]'>One place to run your rentals</h2>
                <p className='font-normal mx-auto w-4/5  text-[#141414]/50 text-2xl text-center'>Everything you need to host your vacation rental property.</p>

            </div>
            <div className='w-full flex flex-col md:flex-row mt-12'>
                <div className='md:w-1/2 text-[#120B59]  text-lg md:text-[28px] leading-[40.46px]'>
                    <div className='flex flex-col gap-4 md:w-4/5'>
                        <div className='flex gap-4 w-full'>
                            <button className={`${showComponent.showGlobalExposure ? "bg-[#F7D10B] shadow-md" : "bg-white shadow-sm"} w-full  rounded-lg p-1 md:p-[10px]`} onClick={() => handleShowComponent("showGlobalExposure")}>Global exposure</button>
                            <button className={`${showComponent.showCalenderSync ? "bg-[#1FEBC6] shadow-md" : "bg-white shadow-sm"}bg-white shadow-sm rounded-lg p-1 md:p-[10px] w-full`} onClick={() => handleShowComponent("showCalenderSync")}>Calender sync</button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className={`${showComponent.showManagementDashboard ? "bg-[#91E768] shadow-md" : "bg-white shadow-sm"} rounded-lg p-1 md:p-[10px]`}
                                onClick={() => handleShowComponent("showManagementDashboard")}
                            >Management dashboard</button>
                        </div>
                        <div className='flex gap-4 w-full'>
                            <button className={`${showComponent.showDirectBooking ? "bg-[#1DDBE7] shadow-md" : "bg-white shadow-sm"} w-full  rounded-lg p-1 md:p-[10px]`} onClick={() => handleShowComponent("showDirectBooking")}>Direct booking</button>
                            <button className='bg-white rounded-lg shadow-sm p-1 md:p-[10px] w-full'
                            // onClick={() => handleShowComponent("showGuestMessaging")}
                            >Guest messaging</button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='bg-white rounded-lg shadow-sm p-1 md:p-[10px] w-3/5'
                            // onClick={() => handleShowComponent("showSmartPricing")}
                            >Smart pricing</button>
                        </div>
                    </div>

                </div>
                <div className='w-full mt-4 md:mt-0 md:w-1/2'>
                    {Object.entries(showComponent)
                        .filter(([, isActive]) => isActive)
                        .map(([key]) => {
                            const Component = ComponentMap[key];
                            return <Component key={key} />;
                        })}
                </div>
            </div>
        </section>
    )
}

export default OneplaceTorental