import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!name || !email || !message) {
      Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
      return;
    }

  //simulador de envio
    Swal.fire('¡Envío exitoso!', 'Tu mensaje ha sido enviado correctamente.', 'success');

    // Limpia los campos del formulario después del envío
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
