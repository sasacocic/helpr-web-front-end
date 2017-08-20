import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {logInUser, viewPayload} from './Actions'
import styles from './css/Login'

let LoginForm = props => {
  var submit = (values) =>{
    var {username, password} = values
    props.logIn(username, password).then(res => console.log(`we are done and this is what we got ${res}`) )
  }

  const { handleSubmit } = props
  return(
    <div className={styles.navContainer}>

      <div className={styles.innerContainer}>

        <h2>{"Login"}</h2>

        <form className={styles.flexIt} onSubmit={handleSubmit(submit)}>

          <div className={styles.formCol}>
            <label htmlFor="username">Username</label>
            <Field className={styles.fromColField} name="username"type="text" component="input" />
          </div>

          <div className={styles.formCol}>
            <label htmlFor="Password">Password</label>
            <Field className={styles.fromColField} name="password" type="password" component="input" />
          </div>

          <div className={styles.formButton}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {/* viewPayload() will cause an error if localStorage doesn't have a token */}
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
