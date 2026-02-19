import { NavLink } from "react-router-dom";

// gestione classi in base a isActive
const activeLink = ({ isActive }) => (isActive ? "nav-link-active" : "nav-link-pending");

const handleSubmit = (e) => {
  e.preventDefault();
};

export default function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>Random Shop</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className={activeLink}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={activeLink}>
                  Products
                </NavLink>
              </li>
            </ul>
            <form onSubmit={handleSubmit} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
