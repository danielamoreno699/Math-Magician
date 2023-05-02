import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-light p-4 d-flex  justify-content-between custom-navbar">
    <div>
      <h2>Math Magicians</h2>
    </div>

    <div className="navbar-nav">

      <Link
        className="navbar-brand"
        to="/"
      >
        Home
      </Link>

      <NavLink
        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
        to="/Calculator"
      >
        Calculator
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
        to="/Quotes"
      >
        Quotes
      </NavLink>

    </div>

  </nav>
);

export default Navbar;
