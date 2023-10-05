import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function PagoForm({ totalA, PagoRealizado }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

     

      PagoRealizado(paymentMethod); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="payment-form">
      <h2>Pago</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pagar ${totalA}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default PagoForm;
