/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import getInitialState from './getInitialState';
import rootReducer from './reducers';
import { initEnhancer } from '../reduxUtils';
import { initJQueryAjax } from '../modules/utils';
import App from './components/App';
import { appSetup } from '../common';

import './main.less';
import '../../stylesheets/reactable-pagination.css';
import '../components/FilterableTable/FilterableTableStyles.css';

appSetup();
initJQueryAjax();

const appContainer = document.getElementById('app');
const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));
const state = getInitialState(bootstrapData);

const store = createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(thunkMiddleware),
    initEnhancer(),
  ),
);

// jquery hack to highlight the navbar menu
$('a:contains("SQL Lab")')
  .parent()
  .addClass('active');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appContainer,
);
