import React from 'react'
import {TextField, Stack, Button, Card, CardContent, Typography} from '@mui/material'

const Register = () => {
  return (
    <Card sx={{px:10, py:7, width:"50%", display:"flex", justifyContent:"center"}}>
      
      <Stack spacing={2} sx={{width:"60%"}} >
        <Typography variant="h5" sx={{p:2}} align='center'>
          Register for NoteIt
        </Typography>
      
          <TextField
          id="filled-hidden-label-small"
          variant="filled"
          label="Name"
          size="small"

        />
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
        <TextField
          id="filled-hidden-label-normal"
          variant="filled"
          size="small"
          label="Confirm Password"
        />
        <TextField
          id="filled-hidden-label-normal"
          variant="filled"
          size="small"
          label="Email"
        />
            
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant='contained' size='large' color='warning' >signup</Button>
          </Stack>
      </Stack>
    </Card>
  )
}

export default Register
