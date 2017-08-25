import fetch from 'isomorphic-fetch'
import Consts from './Constants'


/* helper/debugging actions */
export const helpers = {
  decodeJwtPayload: function decodeJwt(jwt){
    var base64Url = jwt.split('.')[1]; // this is the payload
    var base64 = base64Url.replace('-', '+').replace('_', '/'); // not sure why these characters are being replaced
    return JSON.parse(window.atob(base64));
  },
  isExpired: function isJwtExpired(jwtExpirationTime){
    let time = new Date().getTime()
    // convert time from miliseconds to seconds
    // jwt expiration time is in seconds
    // can also do Math.floor
    let timeInSeconds = Math.round(time / 1000);
    console.log(`seconds left until expiration = ${jwtExpirationTime - timeInSeconds}`);
    return (jwtExpirationTime - timeInSeconds) <= 0
  },
  isUserValid: function userIsValid(jwt=undefined){
    // if jwt is set to something that isn't a jwt or undefined this will crash
    console.log(`
      jwt= ${jwt}
      typeof jwt = ${typeof jwt}
      `);
    if(!jwt){
      return false
    }
    let payload = helpers.decodeJwtPayload(jwt);
    return !helpers.isExpired(payload.exp) //returns false if not expired and true if expired
  }
}
export function viewPayload(){
  try {
    var payload = helpers.decodeJwtPayload(window.localStorage[storage_consts.JWT])
    console.log(payload);
  } catch(err) {
    console.log('error occured in decoding jwt payload.');
    console.log(err);
  }

}

var api_scheme = {
  baseUrl : 'http://localhost:8080',
  auth_token : '/api-token-auth/',
  get_auth_token: function(){
    return this.baseUrl + this.auth_token
  }
}
var storage_consts = {
  JWT: 'jwtToken'
}
/* helper/debugging actions */

if(helpers.isUserValid(window.localStorage[storage_consts.JWT]) ){
  console.log('USER WAS NOT REMOVED FROM LOCALSTORAGE');
}else{
  console.log('REMOVING THE USER FROM LOCALSTORAGE');
  window.localStorage.removeItem(storage_consts.JWT)
}

/* pure actions */
const userAction = (userPayload) => {
  return {
      type: Consts.USERLIST,
      payload: userPayload
  }
}
const userSignInAction = (bool) => {
  return {
    type: Consts.USERSTATE,
    payload: bool
  }
}
/* pure actions */

/* action thunks */
export const getUsers = () => (dispatch, getState) => {
  return fetch('http://localhost:8080/accounts/',{
    headers:{
      "Authorization": "JWT " + window.localStorage[storage_consts.JWT]
    }
  })
  .then(response => response.json())
  .then(users => dispatch( userAction(users) ))
  .catch(error => console.log(error))
}
export const logInUser = (username, password) => (dispatch, getState) => {
  var auth_endpoint = api_scheme.get_auth_token()
  var login_form = new FormData()
  login_form.append('username', username)
  login_form.append('password', password)

  //NOTE: currently not worrying about refreshing tokens

  return (
    fetch(auth_endpoint,{
      method: 'POST',
      body: login_form
    }).then(res => {
      if(res.ok){
        return res.json()
      }
      throw new Error("Network response was not 200");
    })
    .then(res => {
      if (!window.localStorage[storage_consts.JWT]){
        console.log(`Previous token: ${window.localStorage[storage_consts.JWT]}`);
        window.localStorage.setItem(storage_consts.JWT, res.token)
        console.log(`New token: ${window.localStorage[storage_consts.JWT]}`);
        dispatch( userSignInAction(true) )
      }
      return res;
    }).catch(err => console.log(err))
  )
}
/* action thunks */
