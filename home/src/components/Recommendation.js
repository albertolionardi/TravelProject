import React from 'react';
import RecommendationList from './RecommendationList';
import '../../static/css/recommendation.css';

const hikingRecommendations = [
    {
        image: '../../static/img/bromo.jpg',
        title: 'Mount Bromo',
        description: 'Witness the stunning sunrise over the active volcano of Mount Bromo.'

    },
    {
        image: '../../static/img/rinjani.jpg',
        title: 'Mount Rinjani',
        description: 'Experience the breathtaking views from the summit of Mount Rinjani.'    
    },
    {
        image: '../../static/img/gede.jpg',
        title: 'Mount Gede',
        description: 'Explore the famous Mount Gede'
    },
    {
        image: '../../static/img/batur.jpg',
        title: 'Mount Batur',
        description: 'Some text.'
    }
];

const campingRecommendations = [
    {
        image: '',
        title: '',
        description: 'Some text.'

    },
    {
        image: '',
        title: '',
        description: 'Some text.'
    },
    {
        image: '',
        title: '',
        description: 'Some text.'
    },
    {
        image: '',
        title: '',
        description: 'Some text.'
    }
];
const surfingRecommendations = [
    {
        image: '',
        title: '',
        description: 'Some text.'

    },
    {
        image: '',
        title: '',
        description: 'Some text.'  
    },
    {
        image: '',
        title: '',
        description: 'Some text.'  
    },
    {
        image: '',
        title: '',
        description: 'Some text.'
    }
];
const snorkelingRecommendations = [
    {
        image: '../../static/img/gili_trawangan.jpg',
        title: 'Gili Trawangan',
        description: 'Some Text'

    },
    {
        image: '../../static/img/snorkeling_raja_ampat.jpg',
        title: 'Raja Ampat',
        description: 'Some text'    
    },
    {
        image: '../../static/img/snorkeling_komodo.jpg',
        title: 'Komodo Island',
        description: 'Some text'    
    },
    {
        image: '../../static/img/snorkeling_wakatobi.jpg',
        title: 'Wakatobi, Sulawesi',
        description: 'Some text'    
    }
];
const Recommendation = () => {
    return (
        <div>
            <RecommendationList title="Recommended Hiking" recommendations={hikingRecommendations} />
            <RecommendationList title="Recommended Camping" recommendations={campingRecommendations} />
            <RecommendationList title="Recommended Surfing" recommendations={surfingRecommendations} />
            <RecommendationList title="Recommended Snorkeling" recommendations={snorkelingRecommendations} />
        </div>
    );
};

export default Recommendation;