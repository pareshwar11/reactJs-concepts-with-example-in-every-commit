import React, {useEffect} from 'react'

function UserN(props){
    useEffect(() => {
        alert ("useEffect is called with count state"+ props.count)
        
        }, [props.count]);
    return(
    <>
    <h1>your count is {props.count}</h1>
    <h1>your count is {props.data}</h1>
    </>
    );
}
export default UserN;