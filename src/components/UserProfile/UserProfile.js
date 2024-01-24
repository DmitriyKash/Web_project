import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    // Припустимо, що ми отримуємо дані користувача зі стану або API
    const userData = {
        username: 'Користувач123',
        email: 'example@example.com',
        favorites: ['Стаття 1', 'Стаття 2'],
        comments: ['Коментар до Статті 1', 'Коментар до Статті 2']
    };

    return (
        <div className="userProfile">
            <h1>Профіль користувача: {userData.username}</h1>
            <p>Email: {userData.email}</p>
            <h2>Улюблені статті</h2>
            <ul>
                {userData.favorites.map((article, index) => (
                    <li key={index}>{article}</li>
                ))}
            </ul>
            <h2>Мої коментарі</h2>
            <ul>
                {userData.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserProfile;
