import React from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../static/css/header.css';
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();
  const gotToNewPage=()=>{
    location.href = "/account/login";
  }
  return (
    <header className="header">
      <div>
        <nav>
        <div className="logo-container">
        <img src="/media/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="header-nav">
        <nav>
              <Link to="/">Explore</Link>
              <Link to="/rateus">Rate Us</Link>
              <Link to="/contactus">Contact Us</Link>
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
        <Button variant="contained" color="primary" className="login-button" onClick={gotToNewPage}>
          Login
        </Button>
      </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;