import React from 'react';
import { Link } from 'react-router-dom';
//import CartIcon from './CartIcon'; // Importa el componente CartIcon

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mi Tienda</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              {/* <CartIcon /> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;





