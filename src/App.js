import React from 'react';
import './App.css';
import Button from "./Button";

function App() {

  return (
      <div className="container">
        <div className="content">
          <h1>Онлайн Заробiток ⬇️</h1>
          <div className="buttons">
              <Button />  {/* Вставляем компонент кнопки */}
          </div>
        </div>
      </div>
  );
}

export default App;
