import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserPlant(props) {
  const removePlant = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.patch(`http://localhost:8000/users/remove_plant/${props.plantId}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      // refresh the page
      // TODO: not the best, probably should just update the state of the comp above
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card">
      <div className="card-content">
          {/* should also have the plant name as well as nickname */}
          <p className="title is-4">{props.nickname}</p>
          <p className="subtitle is-6 mt-4">{props.health}</p>
          {/* TODO: add icons for boolean if they need water, sunlight ect */}
      </div>
      <footer className="card-footer">
        <Link to={`/my-garden/${props.id}`} className="card-footer-item button is-primary is-outlined m-2">Status</Link>
        <Link to={`/plants/${props.plantId}`} className="card-footer-item button is-info is-outlined m-2">Info</Link>
        <button onClick={removePlant}  className="card-footer-item button is-danger is-outlined m-2">Remove</button>
      </footer>
    </div>
  );
}

export default UserPlant;