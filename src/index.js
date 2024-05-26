import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartCountReducer from "../src/cartCountSlice.js"
import loggedInSlice from './loggedInSlice.js';

// Store -> Globalized State
const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    loggedIn: loggedInSlice
  }
})

// Action

// Reducer

// Dispatch


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
