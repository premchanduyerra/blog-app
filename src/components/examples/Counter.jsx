import React from 'react'
import { useCounter } from '../HOOKS/useCounter';

export const Counter = () => {

 
const [count, increment, decrement, reset]=useCounter (0,2);

  return (
    <div>
    
    
    <center>

    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>

    </center>
    
    </div>
  )
}
