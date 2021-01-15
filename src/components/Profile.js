import {auth0Client, accessToken } from './auth-client'
import React, {useState, useEffect} from 'react'

export default function Profile(props){

    const [user,setUser] = useState()

    const handleLogout=()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }

    useEffect(() => {
        auth0Client.client.userInfo(
        accessToken() ,(err,user)=>{
        if (err){
          console.log(err)
        } if (user) {
          console.log(user)
         setUser(user)
        }
    })
    }, [])

    return(
        <div>
          {user ? <span>
            <img src= {user.picture} alt={user.name} />
          <h2>{"Hello " + user.name}</h2>
          <p>{user.email}</p>
          </span> : <p>Loading...</p>}
          <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        </div>

        )
}