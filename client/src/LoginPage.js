import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
	// need to fire off an api request to the login page
	// need state for error
	const [error, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		setError(false);
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8000/users/login", {
				email,
				password
			});
			console.log(response.data);
			localStorage.setItem("token", response.data.token);
			window.location.href = "/plants";
		}
		catch (error) {
			console.log(error);
			setError(true);
		}
	}

	return (
		<div className="section">
			<div className="container">
				<div className="columns is-centered">
					<div className="column is-half">
						<h1 className="title is-2">Login</h1>
						<form onSubmit={handleSubmit}>
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
									<button className="button is-link" type="submit">Login</button>
								</div>
								{error && <p className="has-text-danger">There was an error with your login</p>}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;