import App from "./components/App.tsx"
import Header from "./components/Header.tsx";
import React from 'react';
import ReactDOM from 'react-dom';
import '../../language/i18n.js';
import {GoogleOAuthProvider} from "@react-oauth/google"; // Import i18n configuration
const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

root.render(
    <GoogleOAuthProvider clientId='918693617201-clhgeefbq8agc80o0hf92j2h1pepmco8.apps.googleusercontent.com'>
        <App />
    </GoogleOAuthProvider>
); // Use root.render instead of ReactDOM.render