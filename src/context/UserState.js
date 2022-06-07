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
const authPath = ['/', '/favourites', '/Profile', '/Logout']

const UserState = ({children}) => {
    const [pages, setPages] = useState(['favourites', 'login', 'register', 'about']);
    const [settings, setSettings] = useState(['Profile', 'Account', 'Dashboard', 'Logout'])

    const navigate = useNavigate()
    const {fetchTheNotes} = useContext(noteContext)
    const [registerInputs, setRegisterInputs] = useState(initialUserInputs)
    const [profile, setProfile] = useState(null)
    const [loginInputs, setLoginInputs] = useState({email:"", password:""})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
            window.location.reload()
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
            window.location.reload()
        }).catch(err=>{
            console.log(err.message)
        })
    }

    const filterPages = ()=>{
        const newPages = pages.filter(page=>{
            return (page === "login" || page === "register")? false:true
        })
        setPages(newPages)
    }

    const filterSettings = ()=>{
        const newSettings = settings.filter(setting=>{
            return (setting === "Logout")? false:true 
        })
        setSettings(newSettings)
    }

    useEffect(()=>{
        if(!localStorage.getItem("authToken")){
            filterSettings()
            if(authPath.includes(window.location.pathname)){
                navigate("/login")
            }
        }else{
            setIsLoggedIn(true)
            filterPages()
            fetchTheUser()
        }
    },[isLoggedIn, navigate])
const userValues={
    host,
    pages,
    settings,
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
