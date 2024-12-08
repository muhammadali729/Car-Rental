'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

const PaymentPage = () => {
  const { id } = useParams(); // Extract car ID from URL params
  
  const carData = [
    {
      id: 1,
      title: 'Luxury Sedan',
      price: 200,
    },
    {
      id: 2,
      title: 'SUV',
      price: 250,
    },
    {
      id: 3,
      title: 'Economy Hatchback',
      price: 280,
    },
    {
      id: 4,
      title: 'Convertible',
      price: 320,
    },
    {
      id: 5,
      title: 'Electric Car',
      price: 430,
    },
  ];

  const car = carData.find((car) => car.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  // Step tracking
  const [step, setStep] = useState(1);

  // Form data state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  // Validate the inputs for each step
  const validateStep = () => {
    if (step === 1) {
      if (!name || !email || !cardNumber) {
        setError('All fields are required in this step.');
        return false;
      }
    }
    if (step === 2) {
      if (!expiryDate || !cvv) {
        setError('Please fill out all card information.');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);  // Move to the next step if validation passes
        setError('');  // Clear the error message
      } else {
        alert('Payment submitted successfully!');
      }
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payment-title">{car.title} - ${car.price}</h2>
        
        {/* Step Navigation */}
        <div className="step-counter">
          <span>Step {step} of 4</span>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Display error if there is one */}
          {error && <div className="error-message">{error}</div>}

          {/* Step 1: Billing Info */}
          {step === 1 && (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Step 2: Card Info */}
          {step === 2 && (
            <>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="month"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div>
              <p>Review your order</p>
              {/* Order review content goes here */}
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div>
              <p>Payment Confirmed! Thank you for your purchase.</p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="step-navigation">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)}>
                Previous
              </button>
            )}
            {step < 4 ? (
              <button type="submit">Next</button>
            ) : (
              <button type="submit">Pay Now</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
