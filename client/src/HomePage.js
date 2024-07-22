import React from "react";
import NavBar from "./components/navbar";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <NavBar />
      <div>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Gnome your Garden!
            </h1>
            <h2 className="subtitle">
              What do you gnome about your plants?
            </h2>
            <div className="buttons is-flex is-justify-content-center">
              <Link to="/signup" className="button is-light">Sign Up</Link>
              <Link to="/login" className="button is-light">Log In</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

export default HomePage;