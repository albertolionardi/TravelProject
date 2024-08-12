import React, { useEffect, useState } from 'react';
import RecommendationList from './RecommendationList';
import '../../static/css/recommendation.css';
import NavigationBar from './NavigationBar';
import { useTranslation } from 'react-i18next';

const Recommendation = () => {
    const [recommendations, setRecommendations] = useState({
        allActitivites : [],
        hiking: [],
        snorkeling: []
    });
    const { t} = useTranslation();
    const images = [
        '/media/rinjani.jpg',
        '/media/batur.jpg',
        '/media/bromo.jpg',
        // Add more image URLs here
      ];
    const [selectedCategory, setSelectedCategory] = useState('all'); // Default to hiking

    useEffect(() => {
        fetch('/api/activities/')
            .then(response => response.json())
            .then(data => {
                const hiking = data.filter(activity => activity.category === 'hiking');
                const snorkeling = data.filter(activity => activity.category === 'snorkeling');
                const all = data
                setRecommendations({
                    hiking,
                    snorkeling,
                    allActitivites : all, 
                });
            })
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <NavigationBar onCategorySelect={handleCategorySelect} />

            {selectedCategory === 'hiking' && (
                <RecommendationList 
                    title={<span className="small-title">{t('hikingRecommendation')}</span>} 
                    recommendations={recommendations.hiking} 
                />
            )}
            {selectedCategory === 'snorkeling' && (
                <RecommendationList 
                    title={<span className="small-title">{t('snorkelingRecommendation')}</span>} 
                    recommendations={recommendations.snorkeling} 
                />
            )}
            {selectedCategory === 'all' && (
                <>
                    <RecommendationList 
                        title={<span className="small-title">{t('hikingRecommendation')}</span>} 
                        recommendations={recommendations.hiking} 
                    />
                    <RecommendationList 
                        title={<span className="small-title">{t('snorkelingRecommendation')}</span>} 
                        recommendations={recommendations.snorkeling} 
                    />
                </>
            )}
        </div>
    );
};
export default Recommendation;