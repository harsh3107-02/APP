import React from "react";

const Receipt = ({ transaction }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Receipt
        </h2>
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Customer:</span> {transaction.customer.name}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span> {transaction.customer.email}
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Purchased Services:
          </h3>
          <div className="space-y-2">
            {transaction.cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm"
              >
                <p className="text-gray-700 font-medium">{item.name}</p>
                <p className="text-gray-800 font-semibold">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Total: 
            <span className="text-green-600">
              ${transaction.cart.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
