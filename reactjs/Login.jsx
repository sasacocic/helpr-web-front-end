import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {logInUser, viewPayload} from './Actions'

let LoginForm = props => {
  console.log(`history object: ${props.history.goBack}`);
  var submit = (values) =>{
    var {username, password} = values
    props.logIn(username, password).then(res => console.log(`we are done and this is what we got ${res}`) )
  }

  const { handleSubmit } = props
  return(
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username"type="text" component="input" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <Field name="password" type="password" component="input" />
        </div>
        <button type="submit">Submit</button>

      </form>
      <button type="button" onClick={() => viewPayload()}>Testing</button>
    </div>

  )
}

LoginForm = reduxForm({
  form : "Login"
})(LoginForm)


const mapStateToProps = state => {
  return({})
}

const mapDispatchToProps = dispatch => {
  return{
    logIn: (user, pass) => dispatch(logInUser(user, pass)).then(res => res)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
