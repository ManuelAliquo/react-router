import { NavLink } from "react-router-dom";

// gestione classi in base a isActive
const activeLink = ({ isActive }) => (isActive ? "nav-link-active" : "nav-link");

export default function Header() {
  return (
    <header className="p-4 bg-light d-flex sticky-top">
      <h1 className="me-4">Random Shop</h1>
      <nav className="d-flex align-items-center gap-4">
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/about-us" className={activeLink}>
          About Us
        </NavLink>
        <NavLink to="/products" className={activeLink}>
          Products
        </NavLink>
      </nav>
    </header>
  );
}
