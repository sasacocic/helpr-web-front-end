import React from 'react'
import Login from './Login'
import { Route, Switch, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TestComp from './TestComp'




class Routes extends React.Component {
  constructor(props){
    super(props)
    console.log(`current props.loggedInState =: ${props.loggedInState}`);
  }

  componentDidMount(){
    console.log('comp mounted');
    console.log(`current props.loggedInState: ${this.props.loggedInState}`);
  }


  render(){
    return(
      <div>
        <h1>{'Routes Component'}</h1>
        {this.props.loggedInState ? <p>{'swag'}</p> : <p>{'no swag'}</p>}
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
  console.log(`map state to props state = ${state}`);
  console.log(state);
  return{
    loggedInState: state.userSignedIn
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes)
