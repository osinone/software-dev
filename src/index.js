import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider } from 'react-router-dom'

import sum from '@/test';

import router from './router';
import { Provider } from 'react-redux'
import './theme.css'
import store from './store';

const s = sum(11, 22);
console.log(s)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
