import React, {useState} from 'react'

function TestComponent() {

  let initialState = 0
  const [count, setCount] = useState(initialState)

  const handleClick = (e) => {
    e.preventDefault();
    //use try/catch to log errors on event handlers
    try{
      setCount( count + 1 );
    }
    catch(error){
      console.log(error);
    }
    
  }

  return (
    <div>

      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
    
    </div>
  )
}

export default TestComponent;