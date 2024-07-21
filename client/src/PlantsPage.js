import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/navbar";

function PlantsPage() {
	const [plants, setPlants] = useState([]);
	useEffect(() => {
		// call to fetch plants from the server
		axios.get("http://localhost:8000/plants")
			.then((res) => {
				setPlants(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			}
		);
	}, []);
    return (
			<>
				<NavBar />
				<div className="container">
					<h1 className="title">
						Plants Page!
					</h1>
					<div className="columns">
						{/* TODO: might want to think of downstate for this... */}
						{plants.map((plant) => (
							<div className="column" key={plant._id}>
								<div className="card">
									<div className="card-content">
										<p className="title">{plant.name}</p>
										<p className="subtitle">{plant.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					</div>
			</>
    )
}


export default PlantsPage;