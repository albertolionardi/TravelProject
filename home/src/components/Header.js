import React from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '../../static/css/header.css';

function Header() {
  return (
    <header className="header">
      <div>
        <nav>
        <div className="logo-container">
        <img src="/static/img/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-nav">
        <nav>
          <a href="#">Explore</a>
          <a href="#">Rate Us</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
      <div className="header-right">
        <FormControl variant="outlined" className="language-select">
          <InputLabel id="language-label">Language</InputLabel>
          <Select labelId="language-label" id="language" defaultValue="EN" label="Language">
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="ID">ID</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className="login-button">
          Login
        </Button>
      </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;