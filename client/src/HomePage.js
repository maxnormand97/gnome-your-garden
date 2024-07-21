import React from "react";
import NavBar from "./components/navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Welcome to Our Website!
            </h1>
            <h2 className="subtitle">
            </h2>
            <button className="button is-light">Learn More</button>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

export default HomePage;