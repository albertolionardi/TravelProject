import React from 'react';
import '../../static/css/navbar.css';

const NavigationBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="navbar-tabs">
                    <li className="navbar-tab"><a href="#">Search all</a></li>
                    <li className="navbar-tab"><a href="#">Hiking</a></li>
                    <li className="navbar-tab"><a href="#">Camping</a></li>
                    <li className="navbar-tab"><a href="#">Surfing</a></li>
                    <li className="navbar-tab"><a href="#">Snorkeling</a></li>
                </ul>
            </div>
            <div className="search-wrapper">
                <input type="text" className="search-input" placeholder="Search..." />
            </div>
        </div>
    );
}

export default NavigationBar;