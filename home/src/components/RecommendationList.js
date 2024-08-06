import React from 'react';
import '../../static/css/recommendation.css';

const RecommendationList = ({ title, recommendations }) => {
    return (
        <section className="recommendation-section">
            <h2>{title}</h2>
            <div className="recommendation-container">
                {recommendations.map((place, index) => (
                    <div key={index} className="recommendation-card">
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