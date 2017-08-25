import React from 'react'
import { Route, Switch, Link,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
/* My components */
import Home from './Home'
import Login from './Login'
import Navigation from './Navigation'
/* My components */


const HomeOrLogin = ({compProps}) => {
  var {loggedInState} = compProps
  return(
    <Route exact path="/" render={props => {
        if(loggedInState){
          return (<Home {...props} />)
        }else{
          return <Login {...props} />
        }
      }
    } />
  )
}

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
        <HomeOrLogin compProps={this.props} />
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
