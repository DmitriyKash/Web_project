import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Реєстрація користувача:', userDetails);
        // Тут можна додати логіку відправки даних на сервер
    };

    return (
        <div className="registrationForm">
            <form onSubmit={handleSubmit}>
                <h2>Реєстрація</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Ім'я користувача"
                    value={userDetails.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Електронна пошта"
                    value={userDetails.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={userDetails.password}
                    onChange={handleChange}
                />
                <button type="submit">Реєструватися</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
