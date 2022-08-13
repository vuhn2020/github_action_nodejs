import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
function App() {
  const [userName, setUsername] = useState('')
  useEffect(() => {
    getNames();
  },[])
  const getNames = async () => {
    const response = await axios.get('http://localhost:5000/names');
    console.log(response);
  }
  return (
   <h1>My frontend</h1>
  )
}

export default App;
