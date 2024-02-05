import React from 'react'
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    const { id } = useParams();

  return (
    <div>
    Details about the user with id:
    {id}

    </div>
  )
}
