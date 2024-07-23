import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import axios from "axios";
import UserPlant from "./components/userPlant";

function MyGardenPage() {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
    axios.get('http://localhost:8000/users/plants', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setPlants(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  console.log(plants);
  return (
    <>
    <NavBar />
    <div className="container mt-4 mb-4">
      <h1 className="title mb-4">
        Overall stats
      </h1>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title is-4 has-text-white">Total Plants</p>
              <p className="title is-6 has-text-white">{plants.length}</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title is-4 has-text-white">Overall plant health</p>
              <p className="title is-6 has-text-white">Healthy</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* TODO: implement later with a scope */}
    {/* <div className="container mt-4">
      <h1 className="title mb-4">
				Danger Zone
			</h1>
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-content">
              <p className="title is-4">foo</p>
              <p className="subtitle is-6">Plant details...</p>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Status</a>
              <a href="#" className="card-footer-item">Info</a>
              <a href="#" className="card-footer-item">Remove</a>
            </footer>
          </div>
        </div>
      </div>
    </div> */}

    <div className="container mt-4">
      <h1 className="title mb-4">
				My Garden
			</h1>
      <div className="columns is-multiline">
        {plants && plants.map(plant => (
          <div className="column is-one-third" key={plant._id}>
            <UserPlant nickname={plant.nickname} plantId={plant.plantId} health={plant.health} id={plant._id} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default MyGardenPage;