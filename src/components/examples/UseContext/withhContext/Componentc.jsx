import React, { useState } from 'react'
import { useMyContext } from '../MyContext';
  
export const Componentc = () => {

    const { state, actions } = useMyContext();
    const increment = () => {
        actions.increment(); // Set user data using the setUser action
      };

      const decrement = () => {
        actions.decrement(); // Set user data using the setUser action
        };
    
  return (
    <div>
<center>
<h1>{state.counter}</h1>
    
 <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={actions.reset}>Reset</button>
    <h1>{state.counter}</h1>

    </center>
    </div>
  )
}
