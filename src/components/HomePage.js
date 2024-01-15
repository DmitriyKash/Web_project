import React from 'react';
import './HomePage.css'; // Підключення стилів
import Slider from './Slider';

const HomePage = () => {
    return (
        <div className="homePage">
            <h1>Вітаємо в світі плетіння бісером!</h1>
            <p>Тут ви знайдете все необхідне для створення чудових бісерних виробів.</p>
            <Slider />
            {/* Тут можна додати слайдер або галерею зображень */}
        </div>
    );
}

export default HomePage;
