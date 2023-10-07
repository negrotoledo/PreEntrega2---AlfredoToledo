import React from 'react';
import './product-grid.css';

function ProductDetail({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Descripción: {product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Color: {product.color}</p>
      <p>Tamaño: {product.size}</p>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ProductDetail;
