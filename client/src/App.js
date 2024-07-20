import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [apiResponse, setApiResponse] = useState('')

  useEffect(() => {
    console.log('running')
    // TODO: replace with this ENV path when you have env vars setup
    // TODO: set up ENV file
    // axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    axios.get(' http://localhost:8000/plants')
      .then(response => {
        setApiResponse(response.data.message)
        console.log(response.data, "RES<<<<")
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{apiResponse}</p>
      </header>
    </div>
  );
}

export default App;