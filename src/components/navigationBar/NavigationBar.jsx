import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './NavigationBar.css'
import AboutModal from "../UI/aboutModal/AboutModal";
import About from "../../pages/About";

const NavigationBar = () => {
    const [aboutModal, setAboutModal] = useState(false);
    return (
        <div>
            <nav className="nav">
                <div className="nav-main">
                    <Link
                        to='/ReactBegin/posts'
                        className="logo">
                        <img
                            className='img'
                            src='https://www.pngmart.com/files/21/Funny-PNG-Isolated-HD-Pictures.png' alt=''/>
                        <span className='logo-text'>ржака.com</span>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to='/ReactBegin/signin' className="btn btn-secondary">Войти</Link>
                    <Link to='/ReactBegin/signup' className="btn btn-secondary">Зарегистрироваться</Link>
                    <button
                        onClick={() => setAboutModal(true)}
                        to='/ReactBegin/about'
                        className="btn btn-secondary">
                        Что это такое
                    </button>
                </div>
            </nav>
            <AboutModal visible={aboutModal} setVisible={setAboutModal}>
                <About></About>
            </AboutModal>
        </div>
    );
}

export default NavigationBar;