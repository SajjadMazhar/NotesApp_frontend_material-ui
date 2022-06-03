import './App.css';
import InputField from './components/InputField';
import NotesBody from './components/NotesBody';
import BasicPopover from './components/PopOver';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import NoteState from './context/NoteState';

function App() {
  return (
    <NoteState>
      <ResponsiveAppBar/>
    <div className='app'>
        <InputField/>
        <NotesBody/>
    </div>
    <BasicPopover/>
    </NoteState>
  );
}

export default App;
