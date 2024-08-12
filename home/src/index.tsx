import App from "./components/App.tsx"
import Header from "./components/Header.tsx";
import React from 'react';
import ReactDOM from 'react-dom';
import '../../language/i18n.js'; // Import i18n configuration
const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(<App />); // Use root.render instead of ReactDOM.render