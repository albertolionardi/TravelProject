import React from 'react';
import '../../static/css/recommendation.css';
import { useNavigate } from 'react-router-dom';
const RecommendationList = ({ title, recommendations }) => {
    const navigate = useNavigate();

    const handleCardClick = (activity) => {
        navigate(`/description/${activity}`);
    };

    return (
        <section className="recommendation-section">
            <h2>{title}</h2>
            <div className="recommendation-container">
                {recommendations.map((place, index) => (
                    <div
                        key={index}
                        className="recommendation-card"
                        onClick={() => handleCardClick(place.activity)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={place.image} alt={place.title} className="recommendation-image" />
                        <h3 className="recommendation-title">{place.title}</h3>
                        <p className="recommendation-description">{place.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecommendationList;
