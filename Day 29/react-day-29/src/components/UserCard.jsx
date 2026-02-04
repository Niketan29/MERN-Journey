import React from 'react'
import Button from './Button'

const UserCard = ({user, onDelete}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
      <Button text="Delete User" onClick = {()=>onDelete(user.id)}/>
    </div>
  )
}

export default UserCard
