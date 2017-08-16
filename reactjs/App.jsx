import React from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'
import {Provider} from 'react-redux'
import TestComp from './TestComp'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'



ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
document.getElementById('ApplicationStart'))
