import {Stack, Grid, Typography} from '@mui/material'
import { useContext } from 'react'
import noteContext from '../context/NoteContext'
import Loading from './Loading'
import NoteCard from './NoteCard'
import PaginationButton from './PaginationButton'
const NotesBody = () => {
  const {notes, isLoading} = useContext(noteContext)
  return (
    <Stack>
      <div>
          <hr style={{margin:"2rem"}}/>
        {isLoading?<Loading/>:""}
        <Typography variant="h4">
          Your Notes:
        </Typography>
      </div>
    <Grid container >
        { notes.length===0 ? <Typography variant="h3">No notes to show</Typography>:
        notes.map((note, index)=> <NoteCard key={index} data = {note} />)
        }
    </Grid>
    <PaginationButton/>
    </Stack>
  )
}

export default NotesBody
