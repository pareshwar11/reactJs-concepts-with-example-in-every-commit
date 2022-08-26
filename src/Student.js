import React, { Component } from 'react'
import User from './User';

export default class Student extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
  render() {
    return (
      <div>
        {
            this.state.show?<User/>:<h3>You remove the data</h3>
        }
        <button onClick={()=>{this.setState({show:!this.state.show})}}>componentWillUnmount</button>
      </div>
    )
  }
}
