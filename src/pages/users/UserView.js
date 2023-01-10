import React from 'react'
import { useParams } from 'react-router-dom'


function UserView() {
  const params= useParams();
  return (
    <div>UserView- {params.userid}</div>
  )
}

export default UserView