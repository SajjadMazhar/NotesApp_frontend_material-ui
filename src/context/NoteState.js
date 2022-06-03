import React, { useState } from 'react'
import noteContext from './NoteContext'

const isFavourite = false
const initialNote = [{
  id:1,
  title:"title1",
  content:"content1",
  isFavourite,
  createdAt:"now"
}]


const NoteState = ({children}) => {
    const [notes, setNotes] = useState(initialNote)
    const [noteInput, setNoteInput] = useState({title:"", content:""})
    const [updateInput, setUpdateInput] = useState({id:null, title:"", content:""})
    const [anchorEl, setAnchorEl] = useState(null);
    const [updating, toggleUpdating] = useState(false)

    // adding notes
    const handleSetNotes = ()=>{
      const id = Math.floor(Math.random()*1E9)
      const updatedList = [...notes, {
        id,
        title:noteInput.title, content:noteInput.content,
        isFavourite:false, createdAt: new Date().toDateString()
      }]
      setNotes(updatedList)

    }

    // delete note
    const deleteNote = (id)=>{
      const updatedList = notes.filter(note=> !(note.id === id))
      setNotes(updatedList)
    }

    // opening popover screen
    const handlePopover = (event, id)=>{
      setAnchorEl(event.currentTarget);
      const selectedNote = notes.find(note=> note.id===id)
      setUpdateInput({id,title:selectedNote.title, content:selectedNote.content})
      toggleUpdating(true)
    }

    // updating the note
    const updateNote = ()=>{
      const updatedList = notes.map(note=>{
        if(note.id === updateInput.id){
          return {
            ...note, title:updateInput.title, content:updateInput.content, createdAt:new Date().toDateString()
          }
        }else{
          return note
        }
      })
      setNotes(updatedList)
      toggleUpdating(false)
      handleClose()
    }

    // toggling the favourite notes 
    const toggleFavourite = (id)=>{
      const updatedList = notes.map(note=> {
        if(note.id == id){
          return {
            ...note, isFavourite:note.isFavourite? false:true
          }
        }else{
          return note
        }
      })
      setNotes(updatedList)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


const values ={
  notes, 
  setNoteInput,
  handleSetNotes,
  toggleFavourite,
  deleteNote,
  handlePopover,
  anchorEl,
  handleClose,
  updateInput,
  setUpdateInput,
  updateNote,
}
  return (
    <noteContext.Provider value={values}>
        {children}
    </noteContext.Provider>
  )
}

export default NoteState
