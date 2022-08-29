
import React, { useState } from 'react'
import UserN from './UserN';


function User (){
    const [data, setData] = useState("hey you are going to change in 3 seconds")
    const [count, setCount] = useState(10)
    // Link for get more details of useEffects
    // https://linguinecode.com/post/getting-started-with-react-useeffect

            return(
                <>
                    <h3>useEffect Example sets are</h3>
                    <h4>With Hooks, we can use class component features in function component like state, props, and life-cycle-method.</h4>
                    <p>"{data}"</p>
                    {/* <p>Custom Hooks</p> */}
                    <hr style={{fontWeight:"bold"}}/>
                    <UserN count={count} data={data}/>
                    <button onClick={()=>setData("all are set")}>Update Data </button>
                    <button onClick={()=>setCount(count+1)}>Update Count</button>
                    
                </>
            );
        
    }
export default User;