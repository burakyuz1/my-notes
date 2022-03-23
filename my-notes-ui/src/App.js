import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Row, Col } from 'react-bootstrap';
import { TextField, Button, IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import NoteIcon from '@mui/icons-material/Note';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const API_URL = "https://localhost:5001/";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({ id: 0, title: "", content: "" });

  useEffect(() => {//Başlangıçta ve her update olduğunda, her renderda çalışır.

    axios.get(API_URL + "api/notes")
      .then(function (response) {
        setNotes(response.data)
        if (response.data.length > 0) {
          setSelectedNote(response.data[0])
        }
      })

  }, [])

  const selectNote = (note) => {
    setSelectedNote({ ...note });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(API_URL + "api/notes/" + selectedNote.id, selectedNote)
      .then(function (response) {
        const newNotes = [...notes];
        const i = newNotes.findIndex(x => x.id == response.data.id);
        newNotes[i] = response.data;
        setNotes(newNotes);
      })
  }

  const handleNewClick = (e) => {
    axios.post(API_URL + "api/Notes", { title: "New Note", Content: "" })
      .then(function (response) {
        const newNotes = [...notes];
        newNotes.push(response.data);
        setNotes(newNotes);
        selectNote(response.data);
      })
  }

  const handleDeleteClick = (e) => {
    axios.delete(API_URL + "api/Notes/" + selectedNote.id)
      .then(function (response) {
        setNotes(notes.filter(a => a.id != selectedNote.id));
        setSelectedNote({ id: 0, title: "", content: "" })
      })
  }
  return (
    <div className='App'>
      <Container fluid='md' className='mt-5'>
        <Row>
          <Col sm={4} lg={3}>
            <div className='d-flex'>
              <h2 className='me-auto'>My Notes</h2>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={handleNewClick}
              >
                <AddCircleOutline />
              </IconButton>
            </div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <List>
                {notes.map((note, index) =>
                  <ListItem key={index}>
                    <ListItemButton selected={note.id == selectedNote.id} onClick={() => selectNote(note)}>
                      <ListItemIcon>
                        <NoteIcon />
                      </ListItemIcon>
                      <ListItemText primary={note.title} />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </Box>
          </Col>
          {selectedNote.id != 0 &&
            <Col sm={8} lg={9} >

              <form onSubmit={handleSubmit}>
                <TextField
                  variant='standard'
                  label='Title'
                  defaultValue={selectedNote.title}
                  type='text'
                  style={{ width: "100%" }}
                  value={selectedNote.title}
                  onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                  required />

                <TextField
                  className='mt-3'
                  multiline
                  minRows={10}
                  variant='outlined'
                  label='Content'
                  defaultValue={selectedNote.content}
                  type='text'
                  style={{ width: "100%" }}
                  value={selectedNote.content}
                  onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })}
                  required />
                {/* Selected notu saç, içindeki contenti target.val ile değiş. */}

                <div className='mt-3 justify-content-end d-flex'>
                  <Button
                    type='button'
                    variant="contained"
                    color='error'
                    startIcon={<DeleteIcon />}
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </Button>
                  <Button type='submit' className='ms-3' variant="contained" >
                    Save
                  </Button>
                </div>
              </form>
            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
