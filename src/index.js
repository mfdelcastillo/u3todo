import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.js';
// Import the top-level BrowserRouter component, gives access to state and ref hooks (look at DevTools)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route index element={ <App /> } />
            </Routes>
        </Router>
    </StrictMode>
    ,
    rootElement
);