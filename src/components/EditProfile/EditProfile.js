import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
    const [userData, setUserData] = useState({
        username: 'Користувач123',
        email: 'example@example.com',
        password: '******'
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Оновлені дані користувача:', userData);
        // Тут додати логіку відправки оновлених даних на сервер
    };

    return (
        <div className="editProfile">
            <form onSubmit={handleSubmit}>
                <h2>Редагування профілю</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Ім'я користувача"
                    value={userData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={userData.email}
                    onChange={handleChange}
                />
                <input
                 type="password"
                 name="password"
                 placeholder="Новий пароль"
                 value={userData.password}
                 onChange={handleChange}
                />
            <button type="submit">Зберегти зміни</button>
        </form>
    </div>
    );
}

export default EditProfile;