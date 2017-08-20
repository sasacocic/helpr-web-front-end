import { combineReducers } from 'redux'
import Consts from './Constants' //I think I can leave off the js
import { reducer as formReducer } from 'redux-form'


/*
what the state should look like.
{
  userList: [ user: {}, user: {}, .....],
  userSignedIn: bool
}
*/

const userList = (state=[], action) => {
  if (action.type === Consts.USERLIST){
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
  userList,
  userSignedIn,
  form: formReducer,
})
