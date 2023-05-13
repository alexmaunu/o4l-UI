import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='font-roboto'>
        <App />
      </div>
  </React.StrictMode>
);

reportWebVitals();
