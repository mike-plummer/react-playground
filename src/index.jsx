import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import { Dashboard } from './components/Dashboard';
import { reducer } from './reducer';

// ========================================

const store = createStore(reducer);

ReactDOM.render(
  <Dashboard store = { store } />,
  document.getElementById('root')
);
