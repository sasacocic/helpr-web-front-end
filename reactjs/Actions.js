import fetch from 'isomorphic-fetch'
import Consts from './Constants'


const userAction = (paypay) => {
  return {
      type: Consts.FIRST,
      payload: paypay
  }

}


export const getUsers = () => (dispatch, getState) => {
  return fetch('http://localhost:8080/accounts/')
  .then(response => response.json())
  .then(users => dispatch( userAction(users) ))
  .catch(error => console.log(error))
}
