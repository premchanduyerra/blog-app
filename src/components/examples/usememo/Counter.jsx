import React from 'react'

export const Counter = () => {

    const [counter1, setCounter1] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);


    const increment1 = () => {
        setCounter1(counter1 + 1);
    };

    const increment2 = () => {
        setCounter2(counter2 + 1);
    };

    // const isEven=()=>{
    //     let i=0;
    //     while(i<2000000000) i++;
    //     return counter1%2===0;
    // }
    const isEven=React.useMemo(()=>{
        let i=0;
        while(i<2000000000) i++;
        return counter1%2===0;
    },[counter1]);
    
    const isEven2=React.useMemo(()=>{
        return counter2%2===0;
    },[counter2]);


  return (
    <div>
    <h2> Counter1: {counter1} --{isEven?"EVEN":"ODD"}</h2>   <button onClick={increment1}>Increment1</button>
    <h2> Counter2: {counter2} --  {isEven2?"EVEN":"ODD"} </h2>    <button onClick={increment2}>Increment2</button>
    
    
    </div>
  )
}
