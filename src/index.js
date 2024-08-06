import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; // Correct import for serviceWorker in React 17

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
