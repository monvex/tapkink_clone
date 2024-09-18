import React from 'react';
import './App.css';

function App() {
  const buttons = [
    { label: 'Telegram 1', link: 'https://t.me/your_telegram1' },
    { label: 'Telegram 2', link: 'https://t.me/your_telegram2' },
    { label: 'Telegram 3', link: 'https://t.me/your_telegram3' }
  ];

  return (
      <div className="container">
        <div className="content">
          <h1>Мои контакты</h1>
          <div className="buttons">
            {buttons.map((button, index) => (
                <a key={index} href={button.link} className="button" target="_blank" rel="noopener noreferrer">
                  {button.label}
                </a>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
