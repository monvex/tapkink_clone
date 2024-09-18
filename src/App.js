import React from 'react';
import './App.css';

function App() {
  const buttons = [
    { label: 'Telegram 1', link: 'https://t.me/tg_marcus_top1' },

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
