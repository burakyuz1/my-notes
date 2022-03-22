import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = "https://localhost:5001/";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{//Başlangıçta ve her update olduğunda, her renderda çalışır.

    axios.get(API_URL + "api/notes")
      .then(function (response) {
        setNotes(response.data)
      })

  },[]) 


  return (
    <div className="App">
      <ul>
        {notes.map((x, i) => <li key={i}>{x.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
