
import './App.css';
import React from 'react'
function App() {
  /*
  Why for loop is not using in place of map function
  ANS: bcz for loop is not working inside the return satement
  */
 
 // student.map((item)=>{
   //   return console.log(item)
   // });
    
    // const student=['anil', 'sidhu', 'peter', 'sam']
    // Now suppose we want email, contact, address along with the name so what we do
    // We make array as an object

    const user=[
      {name:"anil", email:"anil@gmai.com", contact:192945969},
      {name:"sidhu", email:"sidhu@gmai.com", contact:192945969},
      {name:"sam", email:"peter@gmai.com", contact:192945456},
      {name:"peter", email:"peter@gmai.com", contact:192945678},
      {name:"bruce", email:"peter@gmai.com", contact:192945969},
    ]

  return (
    <div className="App">
      <h1 className='text-center'>Handle Array with list using map function</h1>
      {/* {
        student.map((item)=>{
          return <h3>{item}</h3>
        })
      } */}
      <table className="table table-hover table-bordered">
        <thead>

        <tr>
          <td>S.No</td>
          <td>
            Name
          </td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        </thead>
        <tbody>
      {
        user.map((i,n)=>
        // i.contact===192945969?
        <tr key={n}>
          <td>{n+1}</td>
          <td>{i.name}</td>
          <td>{i.email}</td>
          <td>{i.contact}</td>
        </tr>
        // :null
        ) 
      }
      </tbody>
      </table>
    </div>
  );
}

export default App;
