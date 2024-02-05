import React from 'react'
import { useInput } from '../HOOKS/useInput';

export const UserFormUsinhHook = () => {

  const [firstName,bindFirstName,resetFirstName]=useInput('');
  const [lastName,bindLastName,resetLastName]=useInput('');



    const submitHandler=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
    }


  return (
    <div>
    <div>

        <input type="text" {...bindFirstName} />
        <input type="text" {...bindLastName} />
        <h2>First Name is - {firstName}</h2>
        <h2>Last Name is - {lastName}</h2>

        <button onClick={submitHandler}>Submit</button>

    </div>
    
    
    
    
    </div>
  )
}
