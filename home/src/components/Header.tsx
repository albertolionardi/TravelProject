import React , {useState, useEffect} from 'react';
import { Button, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import '../../static/css/header.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom"
import LoginModal from './LoginModal';


function Header() {
  const { i18n } = useTranslation();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLanguageChange = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isChecked = i18n.language === 'en';

  const handleExploreClick = () => {
    navigate('/');
  };

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setOpenLoginModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/'); // Navigate to home or any other page
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  return (
    <header className="header">
      <nav className="header__mainNav">
        <div className="header__logo">
          <img
            src="/media/jelajahi_logo.png"
            alt="Logo"
            className="header__logo"
            onClick={handleExploreClick}
          />
        </div>
        <div className="header-right">
          <div className="header-right__container">
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
            <div className="loginButton">
              {!isLoggedIn ? (
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
              ) : (
                <div>
                  <IconButton onClick={handleProfileMenuOpen}>
                    <Avatar alt="User" src="/path-to-avatar.jpg" />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My Cards</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Purchase List</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My Booking</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Refunds</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Promo Info</MenuItem>
                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <LoginModal
        open={openLoginModal}
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
}


export default Header;