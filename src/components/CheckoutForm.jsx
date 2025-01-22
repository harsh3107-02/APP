import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutForm = ({ onComplete }) => {
  const { cart, dispatch } = useCart();
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({ customer, cart });
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Checkout
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-600 font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+123456789"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setCustomer({ ...customer, phone: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
