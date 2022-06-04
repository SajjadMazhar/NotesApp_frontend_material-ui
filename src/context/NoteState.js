import React, { useState } from 'react'
import noteContext from './NoteContext'

const isFavourite = false
const initialNote = [{
  id:1,
  title:"title1",
  content:"content1",
  isFavourite,
  color:'error.light',
  createdAt:"now"
}]


const NoteState = ({children}) => {
    const [notes, setNotes] = useState(initialNote)
    const [noteInput, setNoteInput] = useState({title:"", content:""})
    const [updateInput, setUpdateInput] = useState({id:null, title:"", content:""})
    const [anchorEl, setAnchorEl] = useState(null);
    const [radioValue, setRadioValue] = useState("")

    // adding notes
    const handleSetNotes = ()=>{
      if(!validation(noteInput)) return console.log("The field is empty");
      const id = Math.floor(Math.random()*1E9)
      const updatedList = [...notes, {
        id,
        title:noteInput.title, content:noteInput.content,
        isFavourite:false, createdAt: new Date().toDateString(), color:radioValue
      }]
      setNotes(updatedList)
      setNoteInput({title:"", content:""})
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
      handleClose()
    }

    // radio button handler
    const handleRadioChange = (e)=>{
      setRadioValue(e.target.value)
    }

    // validation Check
    const validation = (testData)=>{
      const regex = /^(?!\s*$).+/
      return regex.test(testData.title) && regex.test(testData.content)
    }

    // toggling the favourite notes 
    const toggleFavourite = (id)=>{
      const updatedList = notes.map(note=> {
        if(note.id === id){
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
  noteInput,
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
  setRadioValue,
  radioValue,
  handleRadioChange
}
  return (
    <noteContext.Provider value={values}>
        {children}
    </noteContext.Provider>
  )
}

export default NoteState
