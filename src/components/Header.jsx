import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 bg-light d-flex sticky-top">
      <h1 className="me-4">Random Shop</h1>
      <nav className="d-flex align-items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    </header>
  );
}
