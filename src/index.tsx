import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {App} from './App';
import {Provider} from "react-redux";
import {setupStore} from "./redux/store";

import './index.css';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Provider store={store}><App/></Provider>);

reportWebVitals();