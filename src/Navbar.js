import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setFilters }) {
  const [categoria, setCategoria] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoria(selectedCategory);

    setFilters((prevFilters) => ({
      ...prevFilters,
      categoria: selectedCategory,
    }));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mi Tienda</Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
          <li className="nav-item">
            <select
              className="form-control"
              value={categoria}
              onChange={handleCategoryChange}
            >
              <option value="">Todas las categorías</option>
              <option value="Mas Vendidos">Más Vendidos</option>
              <option value="Nuevos">Nuevos</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
