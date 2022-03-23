import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, ListGroup, ListGroupItem, Form } from 'react-bootstrap';

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

  return (
    <div className='App'>
      <Container fluid='md' className='mt-3'>
        <Row>
          <Col sm={4} lg={3}>
            <div className='d-flex'>
              <h2 className='me-auto'>Notlarım</h2>
              <Button variant='success'>Yeni</Button>
            </div>
            <ListGroup className='my-3'>
              {notes.map((note, index) =>
                <ListGroup.Item key={index} active={note.id == selectedNote.id} action onClick={() => selectNote(note)}>
                  {note.title}
                </ListGroup.Item>)}
            </ListGroup>

          </Col>
          {selectedNote &&
            <Col sm={8} lg={9} >

              <Form.Control type="text" placeholder='Title' value={selectedNote.title} onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })} />

              <Form.Control className='mt-3' as='textarea' placeholder='Note' rows={8} value={selectedNote.content} onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })} />
              <div className='mt-3 justify-content-end d-flex'>
                <Button variant='danger'>Sil</Button>
                <Button className='ms-2'>Kaydet</Button>
              </div>

            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
