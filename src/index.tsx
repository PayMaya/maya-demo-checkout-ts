import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import { updateStore } from './store';
import config from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = updateStore()
const persistor = persistStore(store)

// check if API keys are provided - if not, don't render
if (!(config.maya_checkout.pub_api_key && config.maya_checkout.sec_api_key)) {
  throw new Error('Incomplete API keys.')
}

root.render(
  <Provider store={store}>
    <PersistGate 
        loading={<div>Loading...</div>}
        persistor={persistor}
      >
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
