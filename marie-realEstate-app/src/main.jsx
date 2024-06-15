import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom';
import ContextProvider from './Components/RealEstateContext/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <ContextProvider >
        <App />
      </ContextProvider >
    </React.StrictMode>
  </Router>
)
