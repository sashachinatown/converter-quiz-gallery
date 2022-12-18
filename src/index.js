import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createMemoryHistory();
root.render(
  <React.StrictMode>
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  </React.StrictMode>
);

