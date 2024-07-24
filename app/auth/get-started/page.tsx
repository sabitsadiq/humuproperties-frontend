"use client";
import GetStarted from '@/app/components/GetStarted';
import GetToKnowYourProperty from '@/app/components/GetToKnowYourProperty';
import Navigator from '@/app/components/Navigator';
import WhatAreYouLookingTodo from '@/app/components/WhatAreYouLookingTodo';
import YourPropertiesLocations from '@/app/components/YourPropertiesLocations';
import React, { useState } from 'react'

const tabs = ["0", "1", "2", "3"];

const Page = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleNextTab = () => {
        if (currentTab < tabs.length - 1) {
            setCurrentTab(currentTab + 1);
        }
    };

    const handlePreviousTab = () => {
        if (currentTab > 0) {
            setCurrentTab(currentTab - 1);
        }
    };

    return (
        <div className='hero-bg w-full min-h-screen flex flex-col items-center'>
            {currentTab === 0 && <GetStarted handleNextTab={handleNextTab} />}
            {currentTab != 0 && <Navigator currentTab={currentTab} handleNextTab={handleNextTab} handlePreviousTab={handlePreviousTab} />}
            {currentTab === 1 && <WhatAreYouLookingTodo />}
            {currentTab === 2 && <GetToKnowYourProperty />}
            {currentTab === 3 && <YourPropertiesLocations />}
        </div>
    )
}

export default Page;