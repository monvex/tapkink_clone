import React from 'react';
import './App.css';

function App() {
  const buttons = [
    { label: 'Телеграм 💬', link: 'https://t.me/onlinezar0bitokbot' },

  ];


  return (
      <div className="container">
        <div className="content">
          <h1>Зв'язок зі мною ⬇️</h1>
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
