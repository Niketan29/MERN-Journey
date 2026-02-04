import React from 'react'

const UserCard = ({user, onDelete}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>{user.email}</h4>
      <button onClick={()=>onDelete(user.id)}>Delete</button>
    </div>
  )
}

export default UserCard
