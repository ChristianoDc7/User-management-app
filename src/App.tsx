import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count ,setCount] = useState<number>(0)

  const [name , setName] = useState<string>("")

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={()=>{setCount(count+1)}}>Increment </button>
      <p>
        two way binding :
        <input type="text" onChange={(event)=>{setName(event.target.value)}} value={name}/>
        Your Name is : {name}
      </p>
    </div>
  );
}

export default App;
