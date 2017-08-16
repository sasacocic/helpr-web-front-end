import thunk from "redux-thunk"
import singleReducer from './Reducers'
import { helpers } from './Actions' //this makes the actions run before the store
import logger from 'redux-logger'
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"

const hydrate = {
  userSignedIn: !!window.localStorage['jwtToken']
}

const store = createStore(singleReducer, hydrate, applyMiddleware(thunk, logger));


export default store
