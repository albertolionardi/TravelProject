import React , { useEffect, useState }from 'react';
import '../../static/css/recommendation.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const RecommendationList = ({ title, recommendations }) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    useEffect(() => {
        setLang(i18n.language);
    }, [i18n.language]);

    const handleCardClick = (activity) => {
        navigate(`/description/${activity}`);
    };

    return (
        <section className="recommendation-section">
            <h2>{title}</h2>
            <div className="recommendation-container">
                {recommendations.map((place, index) => {
                    const descriptionField = `description_${lang}`; 


                    return (
                        <div
                            key={index}
                            className="recommendation-card"
                            onClick={() => handleCardClick(place.activity)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={place.image} alt={place.title} className="recommendation-image" />
                            <h3 className="recommendation-title">{place.title}</h3>
                            <p className="recommendation-description">
                                {place[descriptionField] || place.description_en}
                            </p>                    
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RecommendationList;