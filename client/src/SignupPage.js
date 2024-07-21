import React, { useState } from "react";
import NavBar from "./components/navbar";
import axios from "axios";

function SignupPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8000/users", {
				firstname: firstName,
				lastname: lastName,
				email,
				password
			});
			// TODO: need to handle what happens when the response is successful
			// we will want to log the user in and redirect to the plants page or something
			console.log(response.data);
			// TODO: need to figure out how to use this throughout the app for auth
			localStorage.setItem("token", response.data.token);

			// redirect to the plants page
			window.location.href = "/plants";

		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<NavBar />
			<h1>Sign Up</h1>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="field">
						<label className="label">First Name</label>
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Name"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Last Name</label>
						<div className="control">
							{/* <input className="input" type="text" placeholder="Name" /> */}
							<input
								className="input"
								type="text"
								placeholder="Name"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							{/* <input className="input" type="email" placeholder="Email" /> */}
							<input
								className="input"
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<div className="control">
							{/* <input className="input" type="password" placeholder="Password" /> */}
							<input
								className="input"
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<button className="button is-primary" type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default SignupPage;