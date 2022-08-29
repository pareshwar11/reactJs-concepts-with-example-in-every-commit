
import './App.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <div className="App">
      <h1 className='text-center'>We are going to learn about How we can install bootstrap and how we can use that</h1>
      <h3 className='my-5'>1. run this code in terminal :- <b>npm i bootstrap react-bootstrap</b> ( here 2 pakages are, react-bootstrap is different and bootstrap is different library )</h3>
      <h3>2. copy the module.css file from https://react-bootstrap.github.io/ </h3>
      <h3>3. Paste it in the index.js file</h3>
      <h3>4. For using the react-bootstrap  read the official document</h3>
      <span>You can also use the bootstrap by copy CDN link paste inside the index.html file </span>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
    </div>
  );
}

export default App;
