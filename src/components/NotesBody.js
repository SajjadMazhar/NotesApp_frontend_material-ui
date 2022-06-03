import {Stack, Grid, Typography} from '@mui/material'
import { useContext } from 'react'
import noteContext from '../context/NoteContext'
import NoteCard from './NoteCard'
const NotesBody = () => {
  const {notes} = useContext(noteContext)
  return (
    <Stack>
      <div>
          <hr style={{margin:"2rem"}}/>
        <Typography variant="h4">
          Your Notes:
        </Typography>
      </div>
    <Grid container >
        { notes.length === 0 ? <Typography variant="h3">No notes to show</Typography>:
        notes.map(note=> <NoteCard key={note.id} data = {note} />)
        }
    </Grid>
    </Stack>
  )
}

export default NotesBody
