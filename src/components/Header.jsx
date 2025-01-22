import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Header = () => {

  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          POS <span className="text-yellow-400">System</span>
        </h1>
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            Cart {totalItems}
          </Link>
          <Link
            to="/analytics"
            className="text-lg hover:text-yellow-300 transition-colors duration-300"
          >
            Analytics
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
