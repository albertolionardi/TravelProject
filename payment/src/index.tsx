import Payment from './components/Payment';
import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(<Payment />); // Use root.render instead of ReactDOM.render