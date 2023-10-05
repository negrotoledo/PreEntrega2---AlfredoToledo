import React from 'react';
import './product-grid.css'; 

function ProductList({ products, addToCart, filters }) {
  // Filtrar productos en función de los filtros seleccionados
  const filteredProducts = products.filter((product) => {
    const passPriceFilter =
      filters.price === '' ||
      (filters.price === 'low' && product.price < 50) ||
      (filters.price === 'medium' && product.price >= 50 && product.price <= 100) ||
      (filters.price === 'high' && product.price > 100);

    const passColorFilter = filters.color === '' || filters.color === product.color;
    const passSizeFilter = filters.size === '' || filters.size === product.size;

    return passPriceFilter && passColorFilter && passSizeFilter;
  });

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Color: {product.color}</p>
          <p>Tamaño: {product.size}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
