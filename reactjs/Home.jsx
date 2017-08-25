import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './Actions'
import { Switch, Route } from 'react-router-dom'
import fetch from 'isomorphic-fetch'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fetching: true
    }
  }

  componentDidMount(){
    this.props.getUserList().then(result => {
      this.setState({
        fetching: false
      })
    })
  }

  render(){
    return(
      <div>
        {this.state.fetching ? <p>{'fetching'}</p> : this.props.userList.map( (user, ind) => <div key={ind}>{user.user.username}</div> )}
      </div>
    )
  }
}

/* --- Container --- */

const mapStateToProps = (state) =>{
  return({
    userList: state.userList
  })
}

const mapDispatchToProps = (dispatch) =>{
  return(
    {
      getUserList: () =>{
        return dispatch( getUsers() ).then(res => res)
      }
    }
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
