import React from "react";

function HomePage() {
  return (
    <div>
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
            <a className="navbar-item" href="/about">
              Your Plants
            </a>
            <a className="navbar-item" href="/services">
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>

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

  );
}

export default HomePage;