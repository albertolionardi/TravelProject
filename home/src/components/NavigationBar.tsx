import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../static/css/navbar.css';

const NavigationBar = ({ onCategorySelect }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery.length > 2) {
            setIsSearching(true);
            fetch(`api/search/?q=${searchQuery}`)
                .then(response => response.json())
                .then(data => setSuggestions(data))
                .catch(error => console.error('Error fetching search suggestions:', error));
        } else {
            setSuggestions([]);
            setIsSearching(false);
        }
    }, [searchQuery]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        navigate(`/description/${suggestion.name}`);
        setIsSearching(false);  // Hide overlay and suggestions on selection
    };

    const handleOverlayClick = () => {
        setIsSearching(false);
    };

    const handleSearchButtonClick = () => {
        console.log("Search button clicked with query:", searchQuery);
    };

    const handleBlur = () => {
        setTimeout(() => setIsSearching(false), 200); // Delay to allow clicking on suggestions
    };

    return (
        <div className="navbar">
            {isSearching && <div className="overlay" onClick={handleOverlayClick}></div>}
            <div className="navbar-container">
                <ul className="navbar-tabs">
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('all')}>
                        <a href="#" className="icon-link">
                            <img src="/media/home_logo.jpg" alt="All Activities Logo" className='rounded_logo' />
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('hiking')}>
                        <a href="#" className="icon-link">
                            <img src="/media/hiking_logo.jpg" alt="Hiking Logo" className='rounded_logo' />
                        </a>
                    </li>
                    <li className="navbar-tab icon-tab" onClick={() => onCategorySelect('snorkeling')}>
                        <a href="#" className="icon-link">
                            <img src="/media/snorkeling_logo.jpg" alt="Snorkeling Logo" className='rounded_logo' />
                        </a>
                    </li>
                </ul>
            </div>
            <section className="search-wrapper">
                <div>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Places to go, things to do, activities..." 
                        value={searchQuery}
                        onChange={handleInputChange}
                        onFocus={() => setIsSearching(true)}
                        onBlur={handleBlur}
                    />
                    <button className="search-button" onClick={handleSearchButtonClick}>
                        Search
                    </button>
                </div>
                {isSearching && suggestions.length > 0 && (
                    <ul className='suggestions-list'>
                        {suggestions.map(suggestion => (
                            <li key={suggestion.name} onClick={() => handleSuggestionClick(suggestion)}>
                                <img src={suggestion.image} alt={suggestion.name} />
                                <div style={{ cursor: 'pointer' }}>
                                    <strong style={{ display: 'block', textAlign: 'left' }}>{suggestion.title}</strong>
                                    <p style={{ textAlign: 'left' }}>{suggestion.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}

export default NavigationBar;