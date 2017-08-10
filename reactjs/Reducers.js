import { combineReducers } from 'redux'
import Consts from './Constants' //I think I can leave off the js



const first = (state=[], action) => {
  if (action.type === Consts.FIRST){
    return action.payload
  }
  return state
}


export default combineReducers({
  first
})
