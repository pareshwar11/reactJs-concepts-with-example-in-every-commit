
import React, { useState } from 'react'


function User (){
    const [data, setData] = useState("....")
    const updateData=()=>{
        setData("Custom 2 Hooks")
    }

            return(
                <>
                    <h3>Hooks in ReactJS</h3>
                    <h4>With Hooks, we can use class component features in function component like state, props, and life-cycle-method.</h4>
                    <h3>some hooks are given below</h3>
                    <p>useState</p>
                    <p>useEffect</p>
                    <p>useContext</p>
                    <p>useMemo</p>
                    <p>useRef</p>
                    <p>useReducer</p>
                    <p>{data}</p>
                    <button onClick={()=>setData("Custom Hooks")}>Next</button>
                    <button onClick={updateData}>Next</button>
                    {/* <p>Custom Hooks</p> */}
                    
                </>
            );
        
    }
export default User;