import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../static/css/description.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Description = () => {
    const { activityName } = useParams();
    const [Descriptions, setDescriptions] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const apiKey = process.env.REACT_APP_API_KEY;

    const handleBooking = (activityName, price) => {
        navigate(`/payment/${activityName}`, { state: { price } });
    };

    useEffect(() => {
        fetch(`/api/activities/${activityName}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setDescriptions(data);
            })
            .catch(error => setError(error.message));
    }, [activityName]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Descriptions) {
        return <div>Loading...</div>;
    }

    const longDescriptionField = `long_description_${currentLang}`;
    const longDescriptionText = Descriptions[longDescriptionField] || Descriptions.long_description_en;

    // Map Configuration
    const mapContainerStyle = {
        height: '400px',
        width: '100%',
        borderRadius: '10px',
        marginTop: '20px'
    };

    const center = {
        lat: Descriptions.latitude, // Replace with actual latitude
        lng: Descriptions.longitude // Replace with actual longitude
    };

    return (
        <div className="container">
            <div className="description-container">
                <div className="image-frame">
                    <img src={Descriptions.image} alt={Descriptions.title} />
                </div>
                <div className="description-content">
                    <h1>{Descriptions.title}</h1>
                    <p>{longDescriptionText}</p>
                    <p className="price">{Descriptions.price ? `$${Descriptions.price}` : 'Price not available'}</p>
                    <button className="book-button" onClick={() => handleBooking(Descriptions.title, Descriptions.price)}>Book Now</button>
                </div>
            </div>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Description;
