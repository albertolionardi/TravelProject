import React from 'react';
import { Button } from '@mui/material';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import '../../static/css/main.css'; // Correct relative path to main.css
const App = () => {
  return (
    <div className="app2">
      <Header /> {/* Include Header component */}
      <main className="content">
        <h1>Hiking Indonesia</h1>
        <p>Discover the best hiking trails in Indonesia</p>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
        <section className="intro">
          <h2>Explore Nature</h2>
          <p>Experience the beauty of Indonesia's natural landscapes.</p>
        </section>
        <section className="trails">
          <h2>Popular Trails</h2>
          <ul>
            <li>Mount Rinjani</li>
            <li>Mount Bromo</li>
            <li>Mount Ijen</li>
            <li>Mount Merapi</li>
          </ul>
        </section>
      </main>
    </div>
  );
};


export default App;
// Find the root element in the HTML
const appDiv = document.getElementById('app');

// Create a root and render the App component
const root = createRoot(appDiv);
root.render(<App />);
