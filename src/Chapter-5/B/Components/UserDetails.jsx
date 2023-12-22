import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const params = useParams()
    const UserName = params.UserName
  return (
    <div>Details about {UserName}</div>
  )
}

export default UserDetails