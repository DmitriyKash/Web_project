import React, { useState, useRef, useEffect } from 'react';
import './Slider.css'; // Підключення стилів слайдера


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
    '/img/Screenshot_1.png',
    '/img/Screenshot_2.png',
    '/img/Screenshot_3.png',
    '/img/Screenshot_4.png',
    '/img/Screenshot_5.png',
    '/img/Screenshot_6.png',
    '/img/Screenshot_7.png'
    // Додайте більше зображень за потреби
];

    const slideInterval = useRef();

    const startSlideTimer = () => {
        stopSlideTimer();
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Змініть 3000 на потрібний інтервал часу
    };

    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    useEffect(() => {
        startSlideTimer();
        return () => stopSlideTimer();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        startSlideTimer();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        startSlideTimer();
    };

    return (
        <div className="slider" onMouseEnter={stopSlideTimer} onMouseLeave={startSlideTimer}>
    <div className="slider-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide})` }}
            />
        ))}
    </div>
    <button onClick={prevSlide} className="slide-arrow prev-arrow">&#10094;</button>
    <button onClick={nextSlide} className="slide-arrow next-arrow">&#10095;</button>
    <div className="slide-indicators">
        {slides.map((_, index) => (
            <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
            />
        ))}
    </div>
</div>
);
};

export default Slider;
