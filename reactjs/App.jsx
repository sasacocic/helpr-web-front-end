import React from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'
import {Provider} from 'react-redux'
import TestComp from './TestComp'


ReactDOM.render(
  <Provider store={Store}>
    <TestComp />
  </Provider>,
document.getElementById('ApplicationStart'))
