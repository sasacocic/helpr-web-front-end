import { combineReducers } from 'redux'
import Consts from './Constants' //I think I can leave off the js
import { reducer as formReducer } from 'redux-form'


/*
what the state should look like.
{
  first: [array of users],
  userSignedIn: bool
}
*/

const first = (state=[], action) => {
  if (action.type === Consts.FIRST){
    return action.payload
  }
  return state
}

const userSignedIn = (state=false, action) => {
  if (action.type === Consts.USERSTATE){
    return action.payload
  }
  return state
}

export default combineReducers({
  first,
  userSignedIn,
  form: formReducer,
})
