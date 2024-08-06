import React from 'react';
import '../../static/css/navbar.css';
const NavigationBar = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <ul className="nav-tabs">
                    <li className="nav-tab"><a href="#">Search all</a></li>
                    <li className="nav-tab"><a href="#">Hiking</a></li>
                    <li className="nav-tab"><a href="#">Camping</a></li>
                    <li className="nav-tab"><a href="#">Surfing</a></li>
                    <li className="nav-tab"><a href="#">Snorkeling</a></li>

                </ul>
            </nav>
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search..." />
            </div>
        </header>

    );
}

export default NavigationBar;
