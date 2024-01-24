import React, { useState, useEffect } from 'react';
import './Notifications.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Тут можна імітувати завантаження сповіщень, наприклад, з API
        setNotifications(["Нова стаття у блозі", "Новий коментар до вашого відгуку"]);
    }, []);

    return (
        <div className="notifications">
            <h2>Сповіщення</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
