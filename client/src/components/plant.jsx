import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Plant({ plant }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const token = localStorage.getItem('token');
  const addPlantToGarden = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/users/add_plant/${plant._id}`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="column is-half" key={plant._id}>
      <div className="card">
        <div className="card-content">
          <figure className="image is-128x128 mb-4">
            <img src="https://via.placeholder.com/128" alt="Placeholder image" />
          </figure>
          <p className="title">{plant.name}</p>
          <p className="subtitle">{plant.description}</p>
          <div className="content">
            <p><strong>Light:</strong> {plant.light}</p>
            <p><strong>Water:</strong> {plant.water}</p>
            <p><strong>Temperature:</strong> {plant.temperature}</p>
            {/* TODO: add difficulty variations and function to handle it */}
            <p><strong>Difficulty:</strong> {plant.difficulty}</p>
          </div>
        </div>
        <footer className="card-footer">
          <Link to={`/plants/${plant._id}`} className="card-footer-item button is-secondary">Learn More</Link>
          {/* TODO: fix this up for new users with blank ids */}
          {/* {
            user && user.plantIds.includes(plant._id) ?
            <button  className="card-footer-item button is-danger is-outlined">Remove from Garden</button> :
            <button onClick={addPlantToGarden} className="card-footer-item button is-primary is-outlined">Add to Garden</button>

          } */}
          <button onClick={addPlantToGarden} className="card-footer-item button is-primary is-outlined">Add to Garden</button>
        </footer>
      </div>
    </div>
  );
}

export default Plant;