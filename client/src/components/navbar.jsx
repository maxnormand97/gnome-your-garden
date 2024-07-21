import React from "react";

function NavBar() {
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
							<a className="navbar-item" href="/plants">
							Your Plants
							</a>
							<a className="navbar-item" href="/profile">
							Profile
							</a>
					</div>
				</div>
			</div>
    </nav>
    )
}

export default NavBar;