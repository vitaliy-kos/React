import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Message from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Message text="Большой текст сообщения"/>
  </React.StrictMode>
);

reportWebVitals();
