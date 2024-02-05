import React from 'react'

export const Child = ({greetHandler}) => {
  return (
    <div style={{textAlign:'center'}}>
    
    <button className='btn btn-primary' onClick={()=>greetHandler("prem")}>Greet prem</button><br></br><br></br>
    <button className='btn btn-secondary' onClick={()=>greetHandler("cchand")}>Greet cchand</button><br></br><br></br>

    <button className='btn btn-info' onClick={()=>greetHandler("gopi")}>Greet gopi</button>

    </div>
  )
}
