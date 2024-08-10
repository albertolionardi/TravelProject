import React, { useEffect, useState } from 'react';
import RecommendationList from './RecommendationList';
import '../../static/css/recommendation.css';
import NavigationBar from './NavigationBar';
import Slideshow from './Slideshow';
const Recommendation = () => {
    const [recommendations, setRecommendations] = useState({
        allActitivites : [],
        hiking: [],
        snorkeling: []
    });
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
                    title={<span className="small-title">Explore Indonesia's mountains and uncover the beauty and adventure they hold</span>} 
                    recommendations={recommendations.hiking} 
                />
            )}
            {selectedCategory === 'snorkeling' && (
                <RecommendationList 
                    title={<span className="small-title">Discover the vibrant underwater world of Indonesia through unforgettable snorkeling and diving adventures</span>} 
                    recommendations={recommendations.snorkeling} 
                />
            )}
            {selectedCategory === 'all' && (
                <>
                    <RecommendationList 
                        title={<span className="small-title">Explore all the amazing hiking activities Indonesia has to offer</span>} 
                        recommendations={recommendations.hiking} 
                    />
                    <RecommendationList 
                        title={<span className="small-title">Explore all the amazing snorkeling activities Indonesia has to offer</span>} 
                        recommendations={recommendations.snorkeling} 
                    />
                </>
            )}
        </div>
    );
};
export default Recommendation;