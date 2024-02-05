import React from 'react'
import { Base } from '../../Base'
import { Link, Outlet } from 'react-router-dom'

export const Users = () => {
  return (
    <div>
    <Base>
    
<Link to="/users/user1">User1</Link><br></br>
<Link to="/users/user2">User2</Link><br></br>
<Link to="/users/user3">User3</Link><br></br>
<Link to="/users/user4">User4</Link><br></br>



    <Outlet />
    </Base>
    
    </div>
  )
}
