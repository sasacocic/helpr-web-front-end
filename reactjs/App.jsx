import React from 'react'
import ReactDOM from 'react-dom'
import TheStore from './Store'
import {Provider} from 'react-redux'
import { getUsers } from './Actions'
import TestComp from './TestComp.jsx'


class Thingo extends React.Component {

  render(){
    return(
      <h1>heading</h1>
    )
  }
}

console.log('user...');

TheStore.dispatch( getUsers() )

window.store = TheStore


ReactDOM.render(
  <Provider store={TheStore}>
    <TestComp />
  </Provider>,
document.getElementById('ApplicationStart'))
