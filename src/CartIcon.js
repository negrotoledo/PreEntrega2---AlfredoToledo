
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri'; 

function CartIcon({ onClick }) {
  return (
    <div className="cart-icon" onClick={onClick}>
      <RiShoppingCartLine /> 
    </div>
  );
}

export default CartIcon;
