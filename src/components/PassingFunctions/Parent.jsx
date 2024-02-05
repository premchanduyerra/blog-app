import React from 'react'
import { Child } from './Child'

export const Parent = () => {

    const greet=(message)=>alert(`Hello ${message}`)
  return (
    <div>Parent
    <Child greetHandler={greet}/>
    
    </div>
  )
}
