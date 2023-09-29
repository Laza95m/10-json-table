import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PopupProvider } from './Services/Service.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopupProvider>
      <App />
    </PopupProvider>
  </React.StrictMode>
);
