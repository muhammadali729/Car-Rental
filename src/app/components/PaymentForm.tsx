// components/PaymentForm.tsx
const PaymentForm = () => {
    return (
      <div className="payment-form">
        <h2 className="text-xl font-bold mb-4">Payment Details</h2>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="cardNumber" className="block text-sm">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="expiryDate" className="block text-sm">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="cvv" className="block text-sm">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="paymentMethod" className="block text-sm">Payment Method</label>
            <select id="paymentMethod" className="w-full p-2 border rounded">
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
  
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Confirm Payment
          </button>
        </form>
      </div>
    );
  };
  
  export default PaymentForm;
  