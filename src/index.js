import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from './components/LiveSearch';
import './index.css';
import peaks from './peaks.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LiveSearch characters={peaks} />,
  document.getElementById('root')
);
registerServiceWorker();
