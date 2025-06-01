import { useContext } from "react"
import React from 'react'
import UserContext from "../context/userContext"
import { useState } from "react"

function Profile() {
const {user} = useContext(UserContext)

  if(!user) {
    return <div>Please log in to see your profile.</div>
  }
    return (
        <div>
        <h2>Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Password:</strong> {user.password}</p>
        </div>
    )
}

export default Profile
