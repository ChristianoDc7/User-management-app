import React, { useState } from 'react';



function Count() {
  const [count ,setCount] = useState<number>(0)

  const [name , setName] = useState<string>("")

  const [list , setList] = useState<Array<string>>(['today','tommorrow'])

  return (
    <div >
      <span>{count}</span>
      <button onClick={()=>{setCount(count+1)}}>Increment </button>
      <p>
        two way binding :
        <input type="text" onChange={(event)=>{setName(event.target.value)}} value={name}/>
        Your Name is : {name}
      </p>
      <ul>
      {
        list.map((el,index) => (
          <li key={index}>we are {el} </li>
        ))
      }
      </ul>
    </div>
  );
}

export default Count;
