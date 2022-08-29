
import './App.css';
import style from './custom.module.css'

function App() {
  return (
    <div className="App">
      <h1>Style Types In ReactJS, 3 ways to impliment</h1>
      <h3 className='primary'>Hey This is 1 way to Style--- External File (App.css)</h3>
      <h3 style={{color:'red', backgroundColor:'black'}}>Hey This is 2nd way to Style--- Inline Style</h3>
      <h3 className={style.success}>Hey This is 3rd way to Style--- CSS with module (custom.module.css)</h3>
    </div>
  );
}

export default App;
