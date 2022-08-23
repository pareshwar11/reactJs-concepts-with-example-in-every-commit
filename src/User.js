import React, { Component } from 'react'

class User extends Component{
    constructor(){
        super();
        this.state={
            data: "anil"
        }
    }
    apple(){
        this.setState({
            data:"paresh"
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