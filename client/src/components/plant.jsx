import React from "react";
import { Link } from 'react-router-dom';

function Plant({ plant }) {
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
          {/* TODO: post req to joins table */}
          {/* TODO: need state to know if to remove from garden */}
          <button className="card-footer-item button is-primary is-outlined">Add to Garden</button>
        </footer>
      </div>
    </div>
  );
}

export default Plant;