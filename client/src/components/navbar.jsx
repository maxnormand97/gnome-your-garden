import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function NavBar() {
  // need to fire to users logout route
  // console.log(process.env.REACT_APP_API_URL, 'base url')
  function logout() {
    const token = localStorage.getItem('token'); // Get the auth token from local storage

    if (token === null) {
      return;
    }
    axios.post("http://localhost:8000/users/logout", {}, { // The second argument is the data, which is empty in this case
      headers: {
        'Authorization': `Bearer ${token}` // Include the auth token in the Authorization header
      }
    })
    .then((response) => {
      console.log(response);
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
  }
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              {/* Our Website */}
              {/* TODO: will be site logo and link back to product */}
              {/* find picture of gnome logo */}
              Home
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Profile
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/login">
                    Login
                  </a>
                  <a className="navbar-item" onClick={logout}>
                    Logout
                  </a>
                  <Link to="/plants" className="navbar-item">Plants</Link>
                  <Link to="/my-garden" className="navbar-item">My Garden</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;