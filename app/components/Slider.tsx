"use client";
import React, { useState, useEffect } from 'react';
// import './Carousel.css';
import Image from 'next/image';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
// import data from './data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const data = [
    {
        id: 1,
        image: '/images/racheal.png',
        number: '1',
        name: 'Racheal Gear',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 2,
        image: '/images/racheal.png',
        number: '2',
        name: 'Alex Felix',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 3,
        image: '/images/racheal.png',
        name: 'John Doe',
        number: '3',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 4,
        image: '/images/racheal.png',
        name: 'Racheal Gear',
        number: '4',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 5,
        image: '/images/racheal.png',
        name: 'Alex Felix',
        number: '5',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 6,
        image: '/images/racheal.png',
        name: 'John Doe',
        number: '6',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    }
];


const Slider = () => {
    const [images] = useState(data);
    const [startIndex, setStartIndex] = useState(0); // Track starting index
    const visibleItems = 3;
    const slideWidth = Math.round(100 / visibleItems) + '%'; // Adjust width as needed
    const autoSlideInterval = 3000; // Interval for auto-sliding in milliseconds

    // Handle infinite looping
    useEffect(() => {
        const lastIndex = images.length - visibleItems;
        if (startIndex < 0) {
            setStartIndex(lastIndex);
        } else if (startIndex > lastIndex) {
            setStartIndex(0);
        }
    }, [startIndex, images, visibleItems]);

    // Auto-sliding effect (optional)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + visibleItems) % images.length);
        }, autoSlideInterval);

        return () => clearInterval(intervalId);
    }, [images, visibleItems, autoSlideInterval]);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + visibleItems) % images.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - visibleItems + images.length) % images.length);
    };

    const slicedImages = images.slice(startIndex, startIndex + visibleItems);

    return (
        <div className="relative section flex py-6">
            <div
                className={`section-center flex flex-col md:flex-row overflow-x-hidden gap-4 w-full translateX(-${startIndex * slideWidth}`}
            // style={{ transform: `translateX(-${startIndex * slideWidth})` }}
            >
                {slicedImages.map((item, index) => {
                    const { id, image, text, name, number } = item;
                    const slideClass = 'activeSlide'; // All visible items are considered active

                    return (
                        <article
                            className={`bg-[#FAFAFA] shadow-sm flex flex-col w-${slideWidth} p-10 rounded-lg gap-2 items-center`}
                            key={id}
                        >
                            <Image src={image} className="person-img" width={70} height={70} alt="img" />
                            <h5 className="font-bold text-2xl text-[#000000] leading-[34.68px]">{name}</h5>
                            <h5>{number}</h5>
                            <p className="text-center font-normal w-11/12 text-xl leading-[28.9px] opacity-50 text-[#141414]">
                                {text}
                            </p>
                        </article>
                    );
                })}
            </div>
            <button
                className={`${startIndex === 0 ? 'is-hidden' : 'prev'} absolute top-1/2 -left-2 bg-white shadow-md rounded-md p-2`}
                onClick={handlePrev}
            >
                <IoIosArrowRoundBack />
            </button>
            <button
                className={`${startIndex === images.length - visibleItems ? 'is-hidden' : 'next'} absolute top-1/2 -right-2 bg-white shadow-md rounded-md p-2`}
                onClick={handleNext}
            >
                <IoIosArrowRoundForward />
            </button>
        </div>
    );
};


export default Slider;