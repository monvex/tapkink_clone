import React, { useState } from 'react';
import './App.css';

const TelegramButton = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            // Отправляем запрос на сервер для получения ссылки
            const response = await fetch('/get-telegram-link');
            const data = await response.json();
            // Перенаправляем пользователя на полученную ссылку
            window.location.href = data.link;
        } catch (error) {
            console.error('Ошибка при получении ссылки на Telegram:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleButtonClick} disabled={loading}
            className="button"
        >
            {loading ? 'Завантаження...' : 'Телеграм 💬'}
        </button>
    );
};

export default TelegramButton;