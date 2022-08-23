
import React, { useState } from 'react'

function User(){
    const [showData, setShowData] = useState(true)

        return(
            <>
                <h3>Hide and Show Element</h3>
                <div style={{height: '50px'}}>

                {
                    showData?<h1 >You are in safe zone</h1>:null
                }
                </div>
                <button onClick={()=>setShowData(true)} >Click to Show</button>
                <button onClick={()=>setShowData(false)}>Click to Hide</button>

                <hr />
                <h3>Using one button called toggle</h3>
                <div style={{height: '50px'}}>

                {
                    showData?<h1 >You are in safe zone</h1>:null
                }
                </div>
                <button onClick={()=>setShowData(!showData)}>toggle</button>
            </>
        );
    }
export default User;