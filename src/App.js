import React from 'react';
import './App.css';
import TelegramButton from "./TelegramButton";

function App() {

  return (
      <div className="container">
        <div className="content">
          <h1>Зв'язок зі мною ⬇️</h1>
          <div className="buttons">
              <TelegramButton />  {/* Вставляем компонент кнопки */}
          </div>
        </div>
      </div>
  );
}

export default App;
