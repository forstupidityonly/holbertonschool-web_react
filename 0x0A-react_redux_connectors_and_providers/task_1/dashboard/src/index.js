import React from 'react';
import ReactDOM from 'react-dom';
import App, { ConnectedApp } from './App/App';
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer.js";
import { Provider } from "react-redux";

const myStore = createStore(uiReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
