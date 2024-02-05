import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Base } from '../../Base'

export const Products = () => {
  return (
    <div>
    <Base>
    <br></br>
    <input type="text" placeholder="search"/>
    

    <nav>
        <Link to="feature">feature</Link>
        <Link to="pricing">pricing</Link>
        <Link to="resources">resources</Link>

    </nav>
    <Outlet/>
</Base>

    
    </div>
  )
}
