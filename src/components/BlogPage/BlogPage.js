import React from 'react';
import SocialShareButtons from '../SocialShareButtons/SocialShareButtons';
import './BlogPage.css';

const BlogPage = () => {
    const currentUrl = window.location.href; // Отримуємо поточний URL

    return (
        <div className="blogPage">
            <h1>Блог про плетіння бісером</h1>
            <p>Тут ви знайдете статті, новини та поради з плетіння бісером.</p>
            {/* Вміст блогу */}
            <SocialShareButtons url={currentUrl} />
        </div>
    );
}

export default BlogPage;
