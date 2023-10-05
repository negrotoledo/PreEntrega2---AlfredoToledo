import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import CartIcon from './CartIcon'; 
import CartModal from './CartModal'; 
import ProductList from './ProductList';
import Swal from 'sweetalert2';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [showCartModal, setShowCartModal] = useState(false); 



  // Función para agregar un producto al carrito
  const addToCart = (product) => {
  if (product.stock > 0) {
    setCartItems([...cartItems, product]);
    product.stock--; // Restar 1 al stock del producto
    } else {
      alert('No hay suficiente stock disponible para este producto.');
  }
    
   setTotalAmount(totalAmount + product.price);
  };
  
  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const removedItem = cartItems.find((item) => item.id === productId);
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);

     // Incrementar el stock del producto eliminado
     const productToUpdate = products.find((product) => product.id === productId);
     productToUpdate.stock++;
    setTotalAmount(totalAmount - removedItem.price);
  };

  // Estado para los filtros de productos
  const [filters, setFilters] = useState({
    price: '',
    color: '',
    size: '',
  });

  // Función para el filtro de precio
  const handlePriceChange = (event) => {
    setFilters({ ...filters, price: event.target.value });
  };

  // Función para el filtro de color
  const handleColorChange = (event) => {
    setFilters({ ...filters, color: event.target.value });
  };

  // Función para el filtro de tamaño
  const handleSizeChange = (event) => {
    setFilters({ ...filters, size: event.target.value });
  };

   // Lista de productos
   const products = [
    { id: 1, name: 'Producto 1', price: 25, stock: 2, color: 'Rojo', size: 'M', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_801385-MLA50955101156_082022-F.webp' },
    { id: 2, name: 'Producto 2', price: 50, stock: 10, color: 'Azul', size: 'L', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_636629-MLA50971092127_082022-F.webp' },
    { id: 3, name: 'Producto 3', price: 75, stock: 10, color: 'Verde', size: 'S', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_926685-MLA42160565643_062020-F.webp' },
    { id: 4, name: 'Producto 4', price: 35, stock: 10, color: 'Negro', size: 'XL', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_705978-MLA69565342229_052023-F.webp' },
    { id: 5, name: 'Producto 5', price: 40, stock: 10, color: 'Negro', size: 'X', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_705978-MLA69565342229_052023-F.webp' },
    { id: 6, name: 'Producto 6', price: 95, stock: 10, color: 'Amarillo', size: 'XXL', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_753853-MLA50787662327_072022-F.webp' },



  ];

  const simulatePayment = () => {
  
    setTimeout(() => {
      if (cartItems.length === 0) {
        Swal.fire('El carrito está vacío', 'Agrega productos antes de pagar.', 'error');
      } else {
        // alertas de pago simulado exitoso
        Swal.fire('Pago simulado exitoso', '¡Gracias por tu compra!', 'success');
  
        // Vacia el carrito después del pago
        setCartItems([]);
  
        // Restablecer el total a cero
        setTotalAmount(0);
      }
    }, 2000); // Simulador un retraso de 2 segundos (puedes ajustar esto)
  };




  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <h1>Carrito de Compras</h1>
        <div className="container">
          <CartIcon onClick={() => setShowCartModal(true)} /> 
          <CartModal show={showCartModal} onHide={() => setShowCartModal(false)} cartItems={cartItems} /> 

        
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
      

          <div className="filters">
          
          <label>Filtrar por precio:</label>
          <select value={filters.price} onChange={handlePriceChange}>
            <option value="">Todos</option>
            <option value="low">Menor a $50</option>
            <option value="medium">Entre $50 y $100</option>
            <option value="high">Más de $100</option>
          </select>

          <label>Filtrar por color:</label>
          <select value={filters.color} onChange={handleColorChange}>
          <option value="">Todos</option>
            <option value="Rojo">Color Rojo</option>
            <option value="Azul">Color Azul</option>
            <option value="Verde">Color Verde</option>
            <option value="Negro">Color Negro</option>
            <option value="Amarillo">Color Amarillo</option>
            
          </select>

          <label>Filtrar por tamaño:</label>
          <select value={filters.size} onChange={handleSizeChange}>
          <option value="">Todos</option>
          <option value="M">Tamaño M</option>
            <option value="L">Tamaño L</option>
            <option value="S">Tamaño S</option>
            <option value="X">Tamaño X</option>
            <option value="XXL">Tamaño XXL</option>
            
          </select>
        </div>

        <ProductList products={products} addToCart={addToCart} filters={filters} />
        <Cart cartItems={cartItems} totalAmount={totalAmount} removeFromCart={removeFromCart} simulatePayment={simulatePayment} />
      </div>
    </div>

    </Router>
  );
  }



export default App;