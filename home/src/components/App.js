import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Recommendation  from './Recommendation';

import '../../static/css/main.css';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const App = () => {
  return (
    
    <div className="app">
      <Header />
      <main className="content">
        <h1>Outdoor Activity</h1>
        <p>Discover the best outdoor activities in Indonesia</p>
        <NavigationBar/>
        <section className="trails">
          <Recommendation/>
        </section>
      </main>
    </div>
  );
};

export default App;

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);
root.render(<App />);