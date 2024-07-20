// import './App.css';
import 'bulma/css/bulma.css';
import { useEffect, useState } from "react";
import axios from 'axios';

// TODO: this whole page will be the welcome page
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
    <div>
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Our Website
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="/about">
              About
            </a>
            <a className="navbar-item" href="/services">
              Services
            </a>
            <a className="navbar-item" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Welcome to Our Website!
          </h1>
          <h2 className="subtitle">
            <p className="has-text-centered">{apiResponse}</p>
          </h2>
          <button className="button is-light">Learn More</button>
        </div>
      </div>
    </section>
  </div>

  );
}

export default App;