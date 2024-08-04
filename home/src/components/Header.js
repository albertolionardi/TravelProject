// src/components/Header.js
import React from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '../../static/css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/static/img/logo.png" alt="Logo" className="logo" /> {/* Ensure the correct path */}
        <nav>
          <a href="#">Entdecken</a>
          <a href="#">Reisen</a>
          <a href="#">Bewerten</a>
          <a href="#">Mehr</a>
        </nav>
      </div>
      <div className="header-right">
        <FormControl variant="outlined" className="language-select">
          <InputLabel id="language-label">Language</InputLabel>
          <Select labelId="language-label" id="language" defaultValue="EN" label="Language">
            <MenuItem value="EN">EN</MenuItem>
            <MenuItem value="DE">DE</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" className="login-button">
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;