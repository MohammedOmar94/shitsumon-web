import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { save, load } from "redux-localstorage-simple"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import reducers from './reducers'
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware
  = applyMiddleware(
      save() // Saving done here
  )(createStore)

const store = createStoreWithMiddleware(
  reducers,
  load(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();