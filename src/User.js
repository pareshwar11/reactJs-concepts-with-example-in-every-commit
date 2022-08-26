
import React, { useEffect, useState } from 'react'


function User (){
    const [data, setData] = useState("hey you are going to change in 3 seconds")
    const [count, setCount] = useState(0)
    // Link for get more details of useEffects
    // https://linguinecode.com/post/getting-started-with-react-useeffect
    useEffect(() => {
    console.log("useEffect is also work as componentDidMount")
      setTimeout(() => {
        setData("I'm fine, thanks for asking.");
      }, 5000)

    }, []);

            return(
                <>
                    <h3>useEffect Example sets are</h3>
                    <h4>With Hooks, we can use class component features in function component like state, props, and life-cycle-method.</h4>
                    <p>"{data}"</p>
                    {/* <p>Custom Hooks</p> */}
                    <hr style={{fontWeight:"bold"}}/>
                    <p>{count}</p>
                    <button onClick={()=>setCount(count+1)}>Increase the value</button>
                    
                </>
            );
        
    }
export default User;