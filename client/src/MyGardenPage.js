import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar";

function MyGardenPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  // axios request to find all the user plants
  // TODO: will need a new endpoint for this
  return (
    <>
    <NavBar />
    <div className="container mt-4 mb-4">
      <h1 className="title mb-4">
        Overall stats
      </h1>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title is-4 has-text-white">Total Plants</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-content">
              <p className="title is-4 has-text-white">Overall plant health</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <h1 className="title mb-4">
				Danger Zone
			</h1>
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-content">
              <p className="title is-4">foo</p>
              <p className="subtitle is-6">Plant details...</p>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Status</a>
              <a href="#" className="card-footer-item">Info</a>
              <a href="#" className="card-footer-item">Remove</a>
            </footer>
          </div>
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <h1 className="title mb-4">
				My Garden
			</h1>
      <div className="columns is-multiline">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-content">
              <p className="title is-4">foo</p>
              <p className="subtitle is-6">Plant details...</p>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">Status</a>
              <a href="#" className="card-footer-item">Info</a>
              <a href="#" className="card-footer-item">Remove</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyGardenPage;