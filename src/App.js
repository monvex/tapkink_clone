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
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {  // Если страница была восстановлена из кеша
            window.location.reload();  // Обновляем страницу
        }
    });

    window.addEventListener('focus', () => {
        document.body.style.transform = 'translateZ(0)';  // Принудительное обновление
    });

    useEffect(() => {
        const videoElement = document.querySelector('.hero-video');

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && videoElement.paused) {
                videoElement.play();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


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
                    <div className="hero-video">
                        <div className="hero-overlay"></div>
                        <video autoPlay muted loop playsInline>
                            <source src={process.env.PUBLIC_URL + '/hero_video.mp4'} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="hero-text">
                        <p>Новий спосіб онлайн заробітку</p>
                        <button onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                            Дізнатися докладніше
                        </button>
                    </div>
                </section>


                {/* About Section */}
                <section id="about" className="about">
                    <h2>Про мене і мою діяльність</h2>
                    <p>Ви коли-небудь мріяли про те, щоб гроші самі йшли до вас у кишеню? Арбітраж трафіку - це ваш
                        шанс!</p>
                    <p>Моя мета - ділитися знаннями й особистим досвідом у цій сфері, зробити складні процеси простими й доступними для кожного, щоб ви могли досягати результату й успішно заробляти, не виходячи з дому!</p>
                </section>

                <section id="beneath_hero" className="container-beneath-about">
                    <div className="beneath-about-video">
                        <video
                            src={process.env.PUBLIC_URL + '/beneath_about_video.mp4'}
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
                            <span> ТІЛЬКИ ЛЕГАЛЬНІ МЕТОДИ * СУПРОВІД ЗІ СТАРТУ І ДО ПЕРШОГО УСПІХУ * РЕЗУЛЬТАТ ГАРАНТОВАНИЙ *&nbsp;</span>
                            <span> ТІЛЬКИ ЛЕГАЛЬНІ МЕТОДИ * СУПРОВІД ЗІ СТАРТУ І ДО ПЕРШОГО УСПІХУ * РЕЗУЛЬТАТ ГАРАНТОВАНИЙ *&nbsp;</span>
                        </div>
                    </div>
                </section>

                {/* Feedback Section */}
                <section id="feedback" className="feedback">
                    <h2>Відгуки</h2>
                    <div className="feedback-cards">
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/images/leha.jpg'} alt="Service 1"/>
                            <h3>Олексій</h3>
                            <p>Дякую Маркусу за чіткі інструкції та постійну підтримку!<br/>Однозначно рекомендую!</p>

                        </div>
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/images/posh.jpg'} alt="Service 1"/>
                            <h3>Даріна</h3>
                            <p>Уже дуже давно працюю з цією людиною і хочу сказати величезне спасибі за такий цікавий і
                                прибутковий спосіб заробітку!!!</p>
                        </div>
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + '/images/egor.jpg'} alt="Service 1"/>
                            <h3>Егор</h3>
                            <p>Спочатку думав, що черговий розводняк, але Маркус усе пояснив і розклав по поличках.</p>
                            <p>Людина надійна, можу порекомендувати тим, хто РЕАЛЬНО хоче працювати в інтернеті.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contacts-container">
                    <p>Зацікавило? Швидше тисни і зв'яжися зі мною!</p>
                    <div className="button-block">
                        <Button></Button>
                    </div>

                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; 2024 Marcus Project</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
