import React, { useState } from 'react';
import './product-grid.css';



function ProductList({ products, addToCart, filters, handlePriceChange, handleColorChange, handleSizeChange, handleCategoriaChange }) { 
  const [selectedProduct, setSelectedProduct] = useState(null);
  


  const handlePreview = (product) => {
    setSelectedProduct(product); // Mostrar el modal con la vista previa del producto
  };
 
  // Filtrar productos en función de los filtros seleccionados
  const filteredProducts = products.filter((product) => {
    const passPriceFilter =
      filters.price === '' ||
      (filters.price === 'low' && product.price < 50) ||
      (filters.price === 'medium' && product.price >= 50 && product.price <= 100) ||
      (filters.price === 'high' && product.price > 100);

    const passColorFilter = filters.color === '' || filters.color === product.color;
    const passSizeFilter = filters.size === '' || filters.size === product.size;
    const passCategoriaFilter = filters.categoria === '' || filters.categoria === product.categoria;

    return passPriceFilter && passColorFilter && passSizeFilter && passCategoriaFilter;
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
          <p>Categoría: {product.categoria}</p>
          
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          <button onClick={() => handlePreview(product)}>Vista Previa</button>
        </div>
      ))}

      {/* Modal para la vista previa del producto */}
      {selectedProduct && (
        <div className="product-preview-modal">
          {/* <div className="product-preview-content"> */}
          <div className="modal-content">
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>Precio: ${selectedProduct.price}</p>
            {/* Agregar más detalles del producto aquí si es necesario */}
            <button onClick={() => addToCart(selectedProduct)}>Agregar al carrito</button>
            {/* <button onClick={handleCloseModal}>Cerrar</button> */}
            <button onClick={() => setSelectedProduct(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;

