
import './App.css';
// import { useState } from 'react';
import User from './User';


function App() {
  // const [title, setTitle] = useState("Here you can get the data from App component with the help of Props")
  // const changeTitle=()=>{
  //   setTitle("You did it brother")
  // }
  return (
    <div className="App">
      <User title="Here you can get the data from App component with the help of Props"/>
    </div>
  );
}

export default App;
