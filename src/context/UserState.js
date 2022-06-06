import axios from 'axios'
import React, { useContext, useState } from 'react'
import noteContext from './NoteContext';
import userContext from './UserContext'

const initialUserInputs = {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    dob:"",
    dp:null
}
const port = 3001;
const host = `http://localhost:${port}`

const UserState = ({children}) => {
    const {fetchTheNotes} = useContext(noteContext)
    const [registerInputs, setRegisterInputs] = useState(initialUserInputs)
    // const [profile, setProfile] = useState(null)
    const [loginInputs, setLoginInputs] = useState({email:"", password:""})

    const handleOnChangeRegisterInputs = (e)=>{
        setRegisterInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const addNewUser = ()=>{
        
        axios.post(host+"/api/user/signup", registerInputs, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).then(resp=>{
            localStorage.setItem("authToken", resp.data.token)
            console.log("registered")
            setRegisterInputs(initialUserInputs)
            fetchTheNotes()
        }).catch(err=>{
            console.log(err)
        })
    }

    const loginUser = ()=>{
        console.log(loginInputs)
        axios.post(host+"/api/user/signin", loginInputs, {
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            localStorage.setItem("authToken", resp.data.token)
            console.log("Loggedin")
            setLoginInputs({email:"", password:""})
            fetchTheNotes()
        }).catch(err=>{
            console.log(err.message)
        })
    }
const userValues={
    registerInputs,
    handleOnChangeRegisterInputs,
    addNewUser,
    loginInputs,
    setLoginInputs,
    setRegisterInputs,
    loginUser
}
  return (
    <userContext.Provider value={userValues}>
        {children}
    </userContext.Provider>
  )
}

export default UserState
