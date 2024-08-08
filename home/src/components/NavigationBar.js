import React from 'react';
import '../../static/css/navbar.css';
const NavigationBar = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <ul className="nav-tabs">
                <a> <li className="nav-tab">Search all</li></a>
                <a>    <li className="nav-tab">Hiking</li></a>
                <a>  <li className="nav-tab">Camping</li></a>
                <a>   <li className="nav-tab">Surfing</li></a>
                <a>  <li className="nav-tab">Snorkeling</li></a>

                </ul>
            </nav>
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search..." />
            </div>
        </header>

    );
}

export default NavigationBar;
