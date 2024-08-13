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




const App = () => {
  const {t} = useTranslation();

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
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