import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8000/users", {
				firstname: firstName,
				lastname: lastName,
				email,
				password
			});
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
			<div className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="container">
							<h1 className="title is-2">Sign Up</h1>
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
					</div>
				</div>
			</div>
		</>
	);
}

export default SignupPage;