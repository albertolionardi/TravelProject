import React, { useState, useEffect } from 'react';
import '../../static/css/navbar.css';

const NavigationBar = ({ onCategorySelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (searchQuery.length > 2) {
            setIsSearching(true);
            fetch(`api/search/?q=${searchQuery}`)
                .then(response => response.json())
                .then(data => setSuggestions(data));
        } else {
            setSuggestions([]);
            setIsSearching(false);
        }
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setIsSearching(false);  // Hide overlay on selection
    };

    const handleOverlayClick = () => {
        setIsSearching(false);
    };


    return (
        <div className="navbar">
            {isSearching && <div className="overlay" onClick={handleOverlayClick}></div>}
            <div className="navbar-container">
                <ul className="navbar-tabs">
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('all')}>
                        <a href="#" className="icon-link">
                            <img src="/media/home_logo.jpg" alt="All Activities Logo" className='rounded_logo'/>
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('hiking')}>
                        <a href="#" className="icon-link">
                            <img src="/media/hiking_logo.jpg" alt="Hiking Logo" className='rounded_logo'/>
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('snorkeling')}>
                        <a href="#" className="icon-link">
                            <img src="/media/snorkeling_logo.jpg" alt="Snorkeling Logo" className='rounded_logo'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="search-wrapper">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Places to go, things to do, activities..." 
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button className="search-button">Search</button>
                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map(suggestion => (
                            <li key={suggestion.name} onClick={() => handleSuggestionClick(suggestion)}>
                                <img src={suggestion.image} alt={suggestion.title} />
                                <div>
                                    <strong>{suggestion.title}</strong>
                                    <p>{suggestion.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default NavigationBar;