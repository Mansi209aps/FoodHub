import React, { useState } from 'react';

const ChoosePaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentSelection = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the selected payment method
    console.log('Selected Payment:', selectedPayment);
    // Redirect or proceed to the next step
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Choose Payment Method</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="creditCard"
              value="creditCard"
              checked={selectedPayment === 'creditCard'}
              onChange={handlePaymentSelection}
              className="mr-2"
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="paypal"
              value="paypal"
              checked={selectedPayment === 'paypal'}
              onChange={handlePaymentSelection}
              className="mr-2"
            />
            <label htmlFor="paypal">PayPal</label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="stripe"
              value="stripe"
              checked={selectedPayment === 'stripe'}
              onChange={handlePaymentSelection}
              className="mr-2"
            />
            <label htmlFor="stripe">Stripe</label>
          </div>

          {/* Add more payment options as needed */}
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
          disabled={!selectedPayment}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ChoosePaymentMethod;
