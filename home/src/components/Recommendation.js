import React, { useEffect, useState } from 'react';
import RecommendationList from './RecommendationList';
import '../../static/css/recommendation.css';
const Recommendation = () => {
    const [recommendations, setRecommendations] = useState({
        hiking: [],
        camping: [],
        surfing: [],
        snorkeling: []
    });

    useEffect(() => {
        fetch('/api/activities/')
            .then(response => response.json())
            .then(data => {
                const hiking = data.filter(activity => activity.category === 'hiking');
                const camping = data.filter(activity => activity.category === 'camping');
                const surfing = data.filter(activity => activity.category === 'surfing');
                const snorkeling = data.filter(activity => activity.category === 'snorkeling');

                setRecommendations({
                    hiking,
                    camping,
                    surfing,
                    snorkeling
                });
            })
            .catch(error => console.error('Error fetching activities:', error));
    }, []);

    return (
        <div>
            <RecommendationList title="Recommended Hiking" recommendations={recommendations.hiking} />
            <RecommendationList title="Recommended Camping" recommendations={recommendations.camping} />
            <RecommendationList title="Recommended Surfing" recommendations={recommendations.surfing} />
            <RecommendationList title="Recommended Snorkeling" recommendations={recommendations.snorkeling} />
        </div>
    );
};

export default Recommendation;