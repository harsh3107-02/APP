import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty!</p>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <p className="text-lg font-medium text-gray-700 w-20">
                  {item.name} 
                </p>
                <p>
                (x{item.quantity})
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: item })
                    }
                    className="bg-green-500 w-7 text-white px-2 py-1 rounded-full hover:bg-green-600 transition-colors duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: item })
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition-colors duration-300"
                  >
                    -
                  </button>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                }
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="border-t pt-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-green-600">${total.toFixed(2)}</span>
            </h3>
          </div>
          <Link
            to="/checkout"
            className="block bg-blue-600 text-white text-center py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
