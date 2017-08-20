import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './Actions'
import { Switch, Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

class TestComp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fetching: true
    }
  }

  componentDidMount(){
    this.props.first().then(result => {
      this.setState({
        fetching: false
      })
    })
  }

  render(){
    return(
      <div>
        {this.state.fetching ? <p>{'fetching'}</p> : this.props.things.map( (user, ind) => <div key={ind}>{user.user.username}</div> )}
      </div>
    )
  }
}

/* --- Container --- */

const mapStateToProps = (state) =>{
  return({
    things: state.userList
  })
}

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      first: () =>{
        return dispatch( getUsers() ).then(res => res)
      }
    }
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(TestComp)
