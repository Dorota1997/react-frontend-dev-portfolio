import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
serviceWorker.register();
