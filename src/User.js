import { Component } from "react";

class User extends Component{
    componentWillUnmount(){
        // alert("Yes it works")
        console.log("Yes you are in console log")
        // Important of componentWillUnwount
        // Here you can call the any function at any time 
        // or you can delete the function if required
    }

        render(){
            return(
                <>
                    <h3>componentWillUnmount Example</h3>
                    
                </>
            );
        }
    }
export default User;