import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const {fetchTheNotes} = useContext(noteContext)
    const [registerInputs, setRegisterInputs] = useState(initialUserInputs)
    const [profile, setProfile] = useState(null)
    const [loginInputs, setLoginInputs] = useState({email:"", password:""})

    const handleOnChangeRegisterInputs = (e)=>{
        setRegisterInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const fetchTheUser = ()=>{
        const token = localStorage.getItem("authToken")
        axios.get(host+"/api/user", {
            headers:{
                "Content-Type":"multipart/form-data",
                "authorization":"Bearer "+token
            }
        }).then(resp=>{
            const data = resp.data.user
            const newdp = data.dp.split("/")
            newdp.shift()
            const updatedUserData = {...resp.data.user, dp:newdp.join("/")}
            setProfile(updatedUserData)
        }).catch(err=>{
            console.log(err)
        })
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
            setProfile(resp.data.user)
            fetchTheNotes()
            const data = resp.data.user
            const newdp = data.dp.split("/")
            newdp.shift()
            const updatedUserData = {...resp.data.user, dp:newdp.join("/")}
            setProfile(updatedUserData)
            navigate("/")
        }).catch(err=>{
            console.log(err)
        })
    }

    const loginUser = ()=>{
        axios.post(host+"/api/user/signin", loginInputs, {
            headers:{
                "Content-Type":"application/json"
            }
        }).then(resp=>{
            localStorage.setItem("authToken", resp.data.token)
            console.log("Loggedin")
            setLoginInputs({email:"", password:""})
            setProfile(resp.data.user)
            fetchTheNotes()
            navigate("/")
        }).catch(err=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        fetchTheUser()
    },[])
const userValues={
    host,
    registerInputs,
    handleOnChangeRegisterInputs,
    addNewUser,
    loginInputs,
    setLoginInputs,
    setRegisterInputs,
    loginUser,
    profile
}
  return (
    <userContext.Provider value={userValues}>
        {children}
    </userContext.Provider>
  )
}

export default UserState
