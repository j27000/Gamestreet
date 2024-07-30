import React from 'react'
import { Navigate, } from 'react-router-dom'

export const Protectedroutes = ({ children }) => {
    const token = JSON.parse(sessionStorage.getItem("token"))

    return (
        <div>
            {token ? children : <Navigate to="/Login" />}



        </div>
    )
}


