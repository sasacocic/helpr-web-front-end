import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
/* My components */
import TestComp from './TestComp'
import Login from './Login'
import Navigation from './Navigation'
/* My components */





class Routes extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
  }


  render(){
    return(
      <div>
        <Navigation />
        <Switch>

          <Route exact path="/" render={props => {
              if(this.props.loggedInState){
                return (<TestComp {...props} />)
              }else{
                return (<Link to="login/">{"Go Login"}</Link>)
              }
            }
          } />
          <Route exact path="/login/" render={props => <Login {...props} />} />
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    loggedInState: state.userSignedIn
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes)
