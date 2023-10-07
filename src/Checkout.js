import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './product-grid.css'; 


function Checkout({ cartItems, totalAmount, removeFromCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handlePlaceOrder = () => {
   
    alert('¡Gracias por tu compra! Tu pedido ha sido realizado con éxito.');
  };

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>1</td> 
                  <td>${item.price}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="order-total">
            <p>Total a Pagar: ${totalAmount}</p>
          </div>

          <h3>Detalles de Envío</h3>
          <form>
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" name="name" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico:</label>
              <input type="email" name="email" onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Dirección de Envío:</label>
              <textarea name="address" onChange={handleInputChange} required />
            </div>
            <button onClick={handlePlaceOrder}>Realizar Pedido</button>
          </form>
        </div>
      )}

      <div className="checkout-actions">
        <Link to="/cart">Volver al Carrito</Link>
      </div>
    </div>
  );
}

export default Checkout;
