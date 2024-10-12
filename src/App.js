import React from 'react';
import './App.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Button from "./Button";

// Компонент для прокрутки к секции
function ScrollToSection() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return null;
}




function App() {

    // Обработчик для плавной прокрутки
    // const handleScroll = (event, section) => {
    //     event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    //     const element = document.querySelector(section);
    //     if (element) {
    //         const headerHeight = document.querySelector('.header').offsetHeight; // Получаем высоту заголовка
    //         const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Получаем положение элемента
    //         window.scrollTo({
    //             top: elementPosition - headerHeight, // Корректируем позицию с учетом высоты заголовка
    //             behavior: 'smooth' // Плавная прокрутка
    //         });
    //     }
    // };

    return (
        <Router>
            <div className="App">
                <ScrollToSection/>
                {/* Header */}
                {/*<header className="header">*/}
                {/*    <div className="logo">*/}
                {/*        <img src="logo192.png" alt="Logo"/>*/}
                {/*    </div>*/}
                {/*    <nav>*/}
                {/*        <ul>*/}
                {/*            <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>*/}
                {/*            <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>*/}
                {/*            <li><a href="#feedback" onClick={(e) => handleScroll(e, '#feedback')}>Feedback</a></li>*/}
                {/*            <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</header>*/}

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-text">
                        <p>Новый способ онлайн заработка</p>
                        <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                            Узнать подробнее
                        </button>
                    </div>
                </section>


                {/* About Section */}
                <section id="about" className="about">
                    <h2>About Us</h2>
                    <p>Вы когда-нибудь мечтали о том, чтобы деньги сами шли к вам в карман? Арбитраж трафика — это ваш
                        шанс!</p>
                </section>

                <section id="beneath_hero" className="container-beneath-about">
                    <div className="beneath-about-video">
                        <video
                            src={process.env.PUBLIC_URL + '/dollars_falling.mp4'}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-element"
                        ></video>
                    </div>
                </section>

                <section className="marquee-section">
                    <div className="marquee">
                        <div className="marquee-content">
                            <span>Ваш текст будет двигаться здесь. Это может быть сообщение или любой другой контент. </span>
                            <span>Ваш текст будет двигаться здесь. Это может быть сообщение или любой другой контент. </span>
                        </div>
                    </div>
                </section>

                {/* Feedback Section */}
                <section id="feedback" className="feedback">
                    <h2>Our feedback</h2>
                    <div className="feedback-cards">
                        <div className="card">
                            <a href="https://t.me/makimalex"><img  src={process.env.PUBLIC_URL + '/images/test_image.jpg'} alt="Service 1"/></a>
                            <h3>Service 1</h3>
                            <p>High-quality solutions tailored to your needs.</p>
                        </div>
                        <div className="card">
                            <a href="https://t.me/poshdara"><img src={process.env.PUBLIC_URL + '/images/test_image.jpg'} alt="Service 1"/></a>
                            <h3>Service 2</h3>
                            <p>Dedicated support and professional feedback.</p>
                        </div>
                        <div className="card">
                            <a href="https://t.me/trueegakrit"><img src={process.env.PUBLIC_URL + '/images/test_image.jpg'} alt="Service 1"/></a>
                            <h3>Service 2</h3>
                            <p>Dedicated support and professional feedback.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contacts-container">
                    <p>Заинтересовался? Жми на кнопку и скорее свяжись со мной!</p>
                    <div className="telegram-block">
                        <Button></Button>
                    </div>

                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; 2024 Your Business Name. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
