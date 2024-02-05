import React from 'react'
import { Componentc } from './Componentc'

const initialState = {  
  counter:0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
        return { ...state, counter: state.counter+1 }; // Set the increment
    case DECREMENT:
            return { ...state, counter: state.counter-1 }; // Set the decrement
    case RESET:
        return { ...state, counter: 0 }; // Set the decrement
    default:
      return state;
  }
};


export const ComponetB = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [state2, dispatch2] = React.useReducer(reducer, initialState);

  return (
    <div>ComponetB
<hr></hr>
<h1>
{state.counter}
</h1>

<button onClick={()=>dispatch({type:INCREMENT})}>Increment</button>
<button onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
<button onClick={()=>dispatch({type:RESET})}>Reset</button>

<h1>
{state2.counter}
</h1>

<button onClick={()=>dispatch2({type:INCREMENT})}>Increment</button>
<button onClick={()=>dispatch2({type:DECREMENT})}>Decrement</button>
<button onClick={()=>dispatch2({type:RESET})}>Reset</button>    

<hr></hr>

    <br></br>
    
    <Componentc></Componentc>
    </div>
  )
}
