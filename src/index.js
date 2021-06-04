import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import storeOutput from './redux/store';

ReactDOM.render(
  <Provider store={storeOutput.store}>
    <BrowserRouter>
      <PersistGate persistor={storeOutput.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
