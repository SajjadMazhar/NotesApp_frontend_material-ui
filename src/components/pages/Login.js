import React from 'react'
import {TextField, Stack, Button, Card, Typography} from '@mui/material'
import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const muicolor = orange[200]
const Login = () => {
  return (
    <Card sx={{px:10, py:7, width:"50%", display:"flex", justifyContent:"center", bgcolor:muicolor}}>
      
      <Stack spacing={2} sx={{width:"60%"}} >
        <Typography variant="h5" sx={{p:2}} align='center'>
          Login for NoteIt
        </Typography>
        <TextField
          id="filled-hidden-label-normal"
          variant="filled"
          size="small"
          label="Email"
        />
        <TextField
          id="filled-hidden-label-normal"
          variant="filled"
          size="small"
          type="password"
          label="Password"
        />
       
            
          <Stack spacing={2} direction="column" justifyContent="center">
            <Link to="/register">Don't have an account?</Link>
            <Button variant='contained' size='large' color='warning' >Login</Button>
          </Stack>
      </Stack>
    </Card>
  )
}

export default Login
