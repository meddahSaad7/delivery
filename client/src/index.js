import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//redux
import { store } from './Store';
import { Provider } from 'react-redux';
//redux
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


