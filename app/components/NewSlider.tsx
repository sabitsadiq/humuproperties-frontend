"use client";
import React, { useState, useEffect, useRef } from 'react';
import './Carousel2.css'; // Assuming your CSS file is named Carousel.css

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

        // Cleanup on unmount
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
        <div className="wrapper">
            <i id="left" className="fa-solid fa-angle-left" onClick={handleLeftClick} />
            <ul ref={carouselRef} className="carousel" onScroll={handleInfiniteScroll}>
                {/* Map over your actual data to render cards */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <li key={item} className="card">
                        <div className="img">
                            <img src="" alt="" draggable="false" />
                        </div>
                        <h2>{item} Blanche Pearson</h2>
                        <span>Sales Manager</span>
                    </li>
                ))}
            </ul>
            <i id="right" className="fa-solid fa-angle-right" onClick={handleRightClick} />
        </div>
    )
}
export default Carousel;