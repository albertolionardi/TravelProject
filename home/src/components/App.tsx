import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header.tsx';
import Recommendation from './Recommendation.tsx';
import Description from '../../../description/src/components/Description';
import RateUs from '../../../rateus/src/components/Rateus';
import { useTranslation } from 'react-i18next';
import Footer from './Footer.tsx';
import '../../static/css/main.css';
import Payment from '../../../payment/src/components/Payment';
import { ImageSlider } from './ImageSlider.tsx';
import img1 from "../../../TravelProject/media/scenery.jpg"
import img2 from "../../../TravelProject/media/rinjani.jpg"
import img3 from "../../../TravelProject/media/mountain.jpg"
import img4 from "../../../TravelProject/media/gede.jpg"
import img5 from "../../../TravelProject/media/bromo.jpg"



const App = () => {
  const {t} = useTranslation();
  const img = [
    { url: img1, alt: "Img One" },
    { url: img2, alt: "Img Two" },
    { url: img3, alt: "Img Three" },
    { url: img4, alt: "Img Four" },
    { url: img5, alt: "Img Five" },
  ]
  
  return (
    
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <ImageSlider images={img} />
          <h1>{t('Slogan')}</h1>
          <Routes>
            <Route path="/" element={<Recommendation />} />
            <Route path="/description/:activityName" element={<Description />} />
            <Route path ="/rateus" element ={<RateUs/>}/>
            <Route path="/payment/:activityName" element={<Payment />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};


export default App;