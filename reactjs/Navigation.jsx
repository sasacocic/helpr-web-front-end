import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import navStyle from './css/Navigation'




class Navigation extends Component{
  constructor(props){
    super(props)
  }




  render(){
    return(
      <div className={navStyle.navContainer}>

        <h2 className={`${navStyle.redText}`}>
          {"Helpr"}
        </h2>

        <div>
          <button type="button">{"Profile"}</button>
          <button type="button">{"Post"}</button>
        </div>

      </div>
    )
  }
}








export default Navigation
