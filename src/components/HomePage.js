import React from 'react';
import './HomePage.css';
import Slider from './Slider';
import FAQ from './FAQ';


const HomePage = () => {
    return (
        <div className="homePage">
            <h1>Вітаємо в світі плетіння бісером!</h1>
            <Slider />
            <section>
                <h2>Про плетіння бісером</h2>
                <p>Тут ви знайдете інформацію про історію та техніки плетіння бісером...</p>
            </section>
            <section>
                <h2>Галерея виробів</h2>
                {/* Тут можна додати компонент галереї */}
            </section>
            <section>
                <h2>Поради та інструкції</h2>
                    <p>Ознайомтесь з нашими керівництвами та порадами для початківців та досвідчених майстрів...</p>
            </section>
            <section>
                <h2>Відгуки клієнтів</h2>
                    <p>Прочитайте, що кажуть люди про наші вироби та навчальні матеріали...</p>
            </section>
            <section>
                <h2>Контакти</h2>
                    <p>Зв'яжіться з нами, якщо у вас є запитання або ви хочете замовити індивідуальний виріб...</p>
            </section>
            <FAQ />
           </div>
        );

    }

export default HomePage;