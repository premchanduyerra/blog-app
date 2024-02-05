import React from 'react'
import { useDocTitle } from '../HOOKS/useDocTitle';

export const DocTitle = () => {


    const [count, setCount] = React.useState(0);

    useDocTitle(count);



  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count - {count}</button>
    
    </div>
  )
}
