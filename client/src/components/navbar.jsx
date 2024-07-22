import React from "react";
import axios from "axios";

function NavBar() {
  // need to fire to users logout route
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
      <nav className="navbar is-primary">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;