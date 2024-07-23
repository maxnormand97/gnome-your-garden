import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function UserPlantDetailsPage( ) {
    const [userPlant, setUserPlant] = useState({});
    const { userPlantId } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/users/plants/${userPlantId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then((response) => {
            setUserPlant(response.data)
            // TODO: later we will also get some data from the plant itself
          })
          .catch((error) => {
            console.error(error)
          });
      }, [userPlantId]);

    return (
        <>
        <NavBar />
        <div className="container mt-4 mb-4">
          <h1 className="title mb-4">
          {userPlant.nickname}
          </h1>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p className="title">{userPlant.health}</p>
                {/* TODO: put these in when we have font awesome or something */}
                {/* <p><strong>Light:</strong> {userPlant.needsFertilizer}</p> */}
              </div>
            </div>
          </article>
          <Link to="/my-garden" className="button is-primary">Back</Link>
        </div>
        </>
    );
}

export default UserPlantDetailsPage;