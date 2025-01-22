import React from "react";

const Receipt = ({ cart, total, customer }) => {
  return (
    <div className="bg-green-50 text-green-700 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Transaction Receipt</h2>
      <p>Customer: {customer.name || "Guest"}</p>
      <p>Email: {customer.email || "N/A"}</p>
      <ul className="my-4 space-y-2">
        {cart.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold">Total: ${total}</p>
    </div>
  );
};

export default Receipt;
