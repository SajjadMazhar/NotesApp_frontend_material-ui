import React, { useState } from 'react'
import userContext from './UserContext'

const initialUserInputs = {
    name:"",
    email:"",
    password:"",
    confirmPassowrd:"",
    dob:"",
    dp:"static path will go here"
}
const UserState = ({children}) => {

    const [registerInputs, setRegisterInputs] = useState(initialUserInputs)

    const handleOnChangeRegisterInputs = (e)=>{
        setRegisterInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    }

const userValues={
    registerInputs,
    handleOnChangeRegisterInputs
}
  return (
    <userContext.Provider value={userValues}>
        {children}
    </userContext.Provider>
  )
}

export default UserState
