
import React, { useState } from 'react'

function User(props){
    const [data, setData] = useState(null)
    const [print, setPrint] = useState(false)
    const defineDate=(val)=>{
        setData(val.target.value)
        setPrint(false)
    }

        return(
            <>
                <h1>Props with Functional Component</h1>
                <h3>{props.title}</h3>
                {
                    print?<h2>{data}</h2>:null
                }
                {/* <h4>{data}</h4> */}
                <input type="text" onChange={defineDate} />
                <button onClick={()=>setPrint(true)}>Change Name</button>
            </>
        );
    }
export default User;