import './App.css';
import InputField from './components/InputField';
import NotesBody from './components/NotesBody';
import Favourites from './components/pages/Favourites';
import BasicPopover from './components/PopOver';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import NoteState from './context/NoteState';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

function App() {
  return (
    <NoteState>
      <BrowserRouter>
            <ResponsiveAppBar/>
          <Routes>
            <Route path="/" element={
              <div className='app'>
                  <InputField/>
                  <NotesBody/>
                  <BasicPopover/>
              </div>
            }/>
            <Route path="/favourites" element={
              <div className='app'>
                <Favourites/>
                <BasicPopover/>
              </div>
            }/>
          </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
