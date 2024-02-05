import React, { useEffect, useState } from 'react'

export const FunctionTimer = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef=React.useRef();
    useEffect(()=>{
          intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])






  return (
    <div>
        <h1>Function Timer - {timer}</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>

    </div>
  )
}
