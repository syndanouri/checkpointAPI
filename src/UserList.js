import React from 'react'

const UserList = ({user}) => {
  return (
    <div>
         <h1>{user.title}</h1>
         <p>{user.body}</p>
         
    </div>
  )
}

export default UserList