import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './Actions'


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
        <h1>{"Testing"}</h1>
        {this.state.fetching ? <p>{'is fetching'}</p> : <p>{'nope not fetching'}</p>}
        {this.props.things.map((helprUser, index) => <div key={index}> {helprUser.user.username} </div> )}
      </div>
    )
  }
}


/* --- Container --- */

const mapStateToProps = (state) =>{
  return({
    things: state.first
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
