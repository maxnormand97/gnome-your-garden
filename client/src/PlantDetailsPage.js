import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function PlantDetailsPage() {
  const { plantId } = useParams();
  const [plant, setPlant] = useState({})
  useEffect(() => {
      axios.get(`http://localhost:8000/plants/${plantId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((response) => {
          setPlant(response.data)
        })
        .catch((error) => {
          console.error(error)
        });
    }, [plantId])

  return (
    <div className="column is-half">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p className="title">{plant.name}</p>
            <p className="subtitle">{plant.description}</p>
            <p><strong>Light:</strong> {plant.light}</p>
            <p><strong>Water:</strong> {plant.water}</p>
            <p><strong>Temperature:</strong> {plant.temperature}</p>
            <p><strong>Difficulty:</strong> {plant.difficulty}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PlantDetailsPage;
