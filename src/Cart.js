import React from 'react';

function Cart({ cartItems, removeFromCart, simulatePayment }) {
    const calculateTotal = () => {
        let total = 0;
        for (const item of cartItems) {
          total += item.price;
        }
        return total;
      };
    
      return (
        <div className="cart">
          <h2>Carrito de Compras:</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          <button onClick={simulatePayment}>Pagar</button>
        </div>
      );
    }
    
    export default Cart;