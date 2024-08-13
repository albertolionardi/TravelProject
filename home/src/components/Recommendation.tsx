import React, { useEffect, useState } from 'react';
import RecommendationList from './RecommendationList';
import '../../static/css/recommendation.css';
import NavigationBar from './NavigationBar';
import { useTranslation } from 'react-i18next';
import { ImageSlider } from './ImageSlider.tsx';
import img1 from "../../../TravelProject/media/scenery.jpg"
import img2 from "../../../TravelProject/media/rinjani.jpg"
import img3 from "../../../TravelProject/media/mountain.jpg"
import img4 from "../../../TravelProject/media/gede.jpg"
import img5 from "../../../TravelProject/media/bromo.jpg"
const Recommendation = () => {
    const [recommendations, setRecommendations] = useState({
        allActitivites : [],
        hiking: [],
        snorkeling: []
    });
    const { t} = useTranslation();
    const img = [
        { url: img1, alt: "Img One" },
        { url: img2, alt: "Img Two" },
        { url: img3, alt: "Img Three" },
        { url: img4, alt: "Img Four" },
        { url: img5, alt: "Img Five" },
      ]
      
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
            <div className="image-slider-container">
                <ImageSlider images={img} width="800px" height="400px" />
            </div>
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