import React, { useContext } from 'react'
import {TextField, Stack, Button, Grid} from '@mui/material'
import noteContext from '../context/NoteContext'

const InputField = () => {
  const {
    setNoteInput,
    handleSetNotes,
   } = useContext(noteContext)
  return (
    <Grid container justifyContent="center" >
        <TextField
            id="outlined-multiline-flexible"
            label="Title"
            multiline
            rows={1}
            style={{width:"100%"}}
            sx={{m:2}}
            name='title'
            onChange={(e)=>setNoteInput(prev=> ({...prev, [e.target.name]:e.target.value}))}
  
          />
        <TextField
            id="outlined-multiline-flexible"
            label="Content"
            multiline
            rows={4}
            style={{width:"100%"}}
            sx={{m:2}}
            name='content'
            onChange={(e)=>setNoteInput(prev=> ({...prev, [e.target.name]:e.target.value}))}
   
          />
        <Stack spacing={2} direction="row">
          <Button variant='contained' size='large' color='warning' onClick={handleSetNotes}>Add Note</Button>
        </Stack>
    </Grid>
  )
}

export default InputField
