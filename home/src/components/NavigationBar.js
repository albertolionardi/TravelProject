import React from 'react';
import '../../static/css/navbar.css';

const NavigationBar = ({ onCategorySelect }) => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul className="navbar-tabs">
                    <li className="navbar-tab icon-tab"  onClick={() => onCategorySelect('all')}>
                        <a href="#" className="icon-link">
                            <img src="/media/allactitivites.jpg" alt="All Acitivities Logo" className='rounded_logo'/>
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab"  onClick={() => onCategorySelect('hiking')}>
                        <a href="#" className="icon-link">
                            <img src="/media/hiking_logo.jpg" alt="Hiking Logo" className='rounded_logo'/>
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab"  onClick={() => onCategorySelect('snorkeling')}>
                        <a href="#" className="icon-link">
                            <img src="/media/snorkeling_logo.jpg" alt="Snorkeling Logo" className='rounded_logo'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="search-wrapper">
                <input type="text" className="search-input" placeholder="Places to go, things to do, activities.." />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}

export default NavigationBar;