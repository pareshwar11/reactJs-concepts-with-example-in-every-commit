import React, { Component } from 'react'

class User extends Component{
    constructor(){
        super();
        this.state={
            data: 0
        }
    }
    apple(){
        this.setState({
            data:this.state.data+1
        })
    }
    render(){
        return(
            <>
                <h1>Example for class based Component</h1>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.apple()}>Change Name</button>
            </>
        );
    }
}
export default User;