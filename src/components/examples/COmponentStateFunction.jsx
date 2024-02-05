import React, { useState } from 'react'

export const COmponentStateFunction = () => {

const [mouseState,setMouseState]=useState({x:0,y:0});
    
useState(()=>{

    console.log('useEffect called')
    window.addEventListener('click',(e)=>{
        console.log('addEventListener called')
        setMouseState({x:e.clientX,y:e.clientY})
    })


    
},[]);


  return (
    <div>
    {JSON.stringify(mouseState)}
    {mouseState&&<h1>X: {mouseState.x} Y: {mouseState.y}</h1>}
    
    </div>
  )
}





// import React, { useEffect, useState } from 'react'

// export const COmponentStateFunction = () => {

//     const [state, setState] = useState({
//         count: 0,
//         name:''
//     });

//     useEffect(() => {
//         console.log('updating document title')
//         document.title = `Clicked ${state.count} times`
//     }, [state.count ])

//   return (
//     <div>
//     {JSON.stringify(state)}
//     <input type="text" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})}/>
//     <button onClick={()=>setState({...state,count:state.count+1})}>Increment</button>
//     </div>
//   )
// }
