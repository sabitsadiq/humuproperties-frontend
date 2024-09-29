"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Carousel2.css'; // Assuming your CSS file is named Carousel.css
import Image from 'next/image';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const slicedImages = [
    {
        id: 1,
        image: '/images/racheal.png',
        name: 'Racheal Gear',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 2,
        image: '/images/racheal.png',
        name: 'Alex Felix',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 3,
        image: '/images/racheal.png',
        name: 'John Doe',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 4,
        image: '/images/racheal.png',
        name: 'Racheal Gear',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 5,
        image: '/images/racheal.png',
        name: 'Alex Felix',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    },
    {
        id: 6,
        image: '/images/racheal.png',
        name: 'John Doe',
        text: 'Starting and growing a rental business can be a complex process. We’re at hand to help you build and maintain a successful rental business.'
    }
];

const colors = ['#FAFAFA', '#D1ECFF', '#FFFFFF'];


const Carousel = () => {
    const carouselRef = useRef<any>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const
        [cardPerView, setCardPerView] = useState(0);


    useEffect(() => {
        const firstCardWidth = carouselRef.current.querySelector('.card').offsetWidth;
        setCardPerView(Math.round(carouselRef.current.offsetWidth / firstCardWidth));

        // Add copies of last cards to the beginning and first cards to the end for infinite scrolling
        const carouselChildren = [...carouselRef.current.children];
        carouselChildren.slice(-cardPerView).reverse().forEach((card) => {
            carouselRef.current.insertAdjacentHTML('afterBegin', card.outerHTML);
        });
        carouselChildren.slice(0, cardPerView).forEach((card) => {
            carouselRef.current.insertAdjacentHTML('beforeend', card.outerHTML);
        });

        // Autoplay logic
        const autoPlay = () => {
            if (window.innerWidth < 800) return;
            const timeoutId = setTimeout(() => {
                carouselRef.current.scrollLeft += firstCardWidth;
            }, 2500);
            return timeoutId;
        };
        let timeoutId = autoPlay();

        // Cleanup on unmounty
        return () => clearTimeout(timeoutId);
    }, [cardPerView]);

    const handleLeftClick = () => {
        carouselRef.current.scrollLeft -= carouselRef.current.querySelector('.card').offsetWidth;
    };

    const handleRightClick = () => {
        carouselRef.current.scrollLeft += carouselRef.current.querySelector('.card').offsetWidth;
    };

    const handleDragStart = (e: any) => {
        setIsDragging(true);
        carouselRef.current.classList.add('dragging');
        setStartX(e.pageX);
        setStartScrollLeft(carouselRef.current.scrollLeft);
    };

    const
        handleDragging = (e: any) => {
            if (!isDragging) return;
            carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

    const handleDragStop = () => {
        setIsDragging(false);
        carouselRef.current.classList.remove('dragging');
    };

    const handleInfiniteScroll = () => {
        const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
        if (scrollLeft === 0) {
            carouselRef.current.classList.add('no-transition');
            carouselRef.current.scrollLeft = scrollWidth - 2 * offsetWidth;
            carouselRef.current.classList.remove('no-transition');
        } else if (Math.ceil(scrollLeft) === scrollWidth - offsetWidth) {
            carouselRef.current.classList.add('no-transition');
            carouselRef.current.scrollLeft = offsetWidth;
            carouselRef.current.classList.remove('no-transition');
        }
    };

    // const handleMouseEnter = () => clearTimeout(window.timeoutId); // Assuming a global timeoutId

    const handleMouseLeave = () => {
        if (window.innerWidth >= 800) {
            // window.timeoutId = autoPlay(); // Assuming a global timeoutId
        }
    };

    return (
        <div className="wrapper py-10">
            { }
            <div className='flex items-center justify-center absolute rounded-lg w-10 h-10 sm:w-[54px] sm:h-[60px] bg-white shadow-lg top-1/2 -translate-y-1/2 -left-2 sm:-left-4 cursor-pointer' onClick={handleLeftClick}>
                <IoIosArrowRoundBack size={32} />

            </div>
            <div ref={carouselRef} className="carousel" onScroll={handleInfiniteScroll}>
                {slicedImages.map((item: any, index) => {
                    const { id, name, image, text } = item;
                    const colorIndex = index % colors.length; // Get color based on index
                    const backgroundColor = colors[colorIndex];
                    console.log(`bg-[${backgroundColor}]`)
                    console.log("colorindex", colorIndex)
                    return (

                        <article
                            className={`bg-[${backgroundColor}] shadow-sm flex flex-col p-10 rounded-lg gap-2 items-center card`}
                            key={id}
                        >
                            <Image src={image} className="person-img" width={70} height={70} alt="img" />
                            <h5 className="font-bold text-2xl text-[#000000] leading-[34.68px]">{name}</h5>
                            <p className="text-center font-normal w-11/12 text-xl leading-[28.9px] opacity-50 text-[#141414]">
                                {text}
                            </p>
                        </article>

                    )
                })
                }
            </div>
            <div className='flex items-center justify-center absolute rounded-lg w-10 h-10 sm:w-[54px] sm:h-[60px] bg-white shadow-lg top-1/2 -translate-y-1/2 -right-2 sm:-right-4 cursor-pointer' onClick={handleRightClick}>
                <IoIosArrowRoundForward size={32} />

            </div>

        </div>
    )
}
export default Carousel;