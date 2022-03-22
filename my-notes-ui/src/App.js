import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const API_URL = "https://localhost:5001/";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {//Başlangıçta ve her update olduğunda, her renderda çalışır.

    axios.get(API_URL + "api/notes")
      .then(function (response) {
        setNotes(response.data)
      })

  }, [])


  return (
    <div className='App'>
      <Container>
        <h1 className='mt-3'>My Notes</h1>
        <ul>
          {notes.map((x, i) => <li key={i}>{x.title}</li>)}
          <Button variant='secondary'>CLICK ME</Button>
        </ul>
      </Container>
    </div>
  );
}

export default App;
