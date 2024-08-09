import React from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../static/css/header.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom"

function Header() {
  const { i18n } = useTranslation();
  const handleLanguageChange = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang)
    console.log(`Language changed to: ${newLang}`); // Debug log
  }
  const isChecked = i18n.language === 'en';
  const handleRateUsClick = () => {
    window.location.href = '/rateus';
  };
  const handleExploreClick = () => {
    window.location.href ='/'
  }
  const handleAboutUsClick = () => {
    window.location.href ='/aboutUs'
  }
  const navigate = useNavigate();
  const loginRedirect=()=>{
    location.href = "/account/login";
  }
  return (
    
    <header className="header">
        <nav className = "header__mainNav">
        <div className="header__logo">
        <img src="/media/logo.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__links"> 
        <nav>
          <a onClick = {() => handleExploreClick() } className='header__link' >Explore</a>
          <a onClick={() => handleRateUsClick()} className='header__link'>Rate Us </a>
          <a onClick={() => handleAboutUsClick()} className='header__link'>Contact Us</a>
          </nav>
      </div>
      <div className="header-right">
      <div className="switch">
      <input
              checked={isChecked}
              onChange={handleLanguageChange}
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
            />	    
      <label htmlFor="language-toggle"></label>
	    <span className="on">ID</span>
	    <span className="off">EN</span>
  	</div>
    <div className ="loginButton">
    <Button variant="contained" color="primary" className="login-button" onClick={() => loginRedirect()}>
      Login
    </Button>
    </div>

      </div>
        </nav>
    </header>
  );
}

export default Header;