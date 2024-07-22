import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";
import Plant from "./components/plant";

function PlantsPage() {
	const [plants, setPlants] = useState([]);
  const token = localStorage.getItem('token');
	useEffect(() => {
		// call to fetch plants from the server
		axios.get("http://localhost:8000/plants", {
        headers: {
          'Authorization': `Bearer ${token}` // Include the auth token in the Authorization header
        }
      })
			.then((res) => {
				setPlants(res.data);
			})
			.catch((err) => {
				console.log(err);
        // redirect to login page for now
        window.location.href = "/login";
			}
		);
	}, []);
    return (
			<>
				<NavBar />
				<div className="container mt-4">
					<h1 className="title mb-4">
						Plant library
					</h1>
					{/* TODO: might want to think of downstate for this... */}
					<div className="columns is-multiline">
						{plants.map((plant) => (
              <Plant plant={plant} key={plant._id} />
						))}
					</div>
				</div>
			</>
    )
}


export default PlantsPage;