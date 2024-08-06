import React from "react";
import { Link } from "react-router-dom";

function UserPlant(props) {
  return (
    <div className="card">
      <div className="card-content">
          {/* should also have the plant name as well as nickname */}
          <p className="title is-4">{props.nickname}</p>
          <p className="subtitle is-6 mt-4">{props.health}</p>
          {/* TODO: add icons for boolean if they need water, sunlight ect */}
      </div>
      <footer className="card-footer">
        {/* TODO: fix styling its ugly */}
        {/* <a href="#" className="card-footer-item button is-primary is-outlined m-2">Status</a> */}
        <Link to={`/my-garden/${props.id}`} className="card-footer-item button is-primary is-outlined m-2">Status</Link>
        <Link to={`/plants/${props.plantId}`} className="card-footer-item m-2">Info</Link>
        <button  className="card-footer-item button is-danger is-outlined m-2">Remove</button>
      </footer>
    </div>
  );
}

export default UserPlant;