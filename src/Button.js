import React, { useState } from 'react';
import './App.css';

const Button = () => {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {

            // Перенаправляем пользователя на полученную ссылку
            window.location.href = "https://t.me/+15RVILLqExI2MTdi"
        } catch (error) {
            console.error('Ошибка при получении ссылки на Telegram:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wrap">
            <button
                onClick={handleButtonClick} disabled={loading}
                className="button"
            >
                {loading ? 'Завантаження...' : 'ХОЧУ ЗАРОБЛЯТИ!'}
            </button>
        </div>

    );
};

export default Button;