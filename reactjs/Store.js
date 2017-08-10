import thunk from "redux-thunk"
import singleReducer from './Reducers'
import logger from 'redux-logger'
import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux"



// const store = applyMiddleware(thunk, logger)(createStore)(singleReducer);

const store = createStore(singleReducer, applyMiddleware(thunk, logger));


export default store
