import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Recommendation from './Recommendation';
import Description from '../../../description/src/components/Description';
import RateUs from '../../../rateus/src/components/Rateus';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <h1>Outdoor Activity</h1>
          <p>Discover the best outdoor activities in Indonesia</p>
          <NavigationBar/>
          <Routes>
            <Route path="/" element={<Recommendation />} />
            <Route path="/description/:activityName" element={<Description />} />
            <Route path="/rateus" element={<RateUs />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};


export default App;

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);
root.render(<App />);