import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import names from './actionTypeName/name';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

Store.dispatch({ type: names.token, payload: '00a0a0aere0sa1dfe00sdas' });

ReactDOM.render(
  <Provider store={ Store }>
    <App />
  </Provider>
, document.getElementById('root'));
// registerServiceWorker();
