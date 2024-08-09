import RateUs from './components/Rateus';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(<RateUs />); // Use root.render instead of ReactDOM.render