import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { services } from "../data/servicesData";

const Home = () => {
  const { dispatch } = useCart();
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState({});

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (service) => {
    dispatch({ type: "ADD_TO_CART", payload: service });
    setShowPopup(true);

    setDisabledButtons((prev) => ({ ...prev, [service.id]: true }));

    setTimeout(() => {
      setDisabledButtons((prev) => ({ ...prev, [service.id]: false }));
    }, 2000);

    setTimeout(() => setShowPopup(false), 1000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Explore Our Services
      </h1>
      <input
        type="text"
        placeholder="Search services..."
        className="border border-gray-300 rounded-lg p-3 w-full max-w-md mx-auto block mb-8 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {service.name}
            </h3>
            <p className="text-gray-600 mb-2">
              Category: <span className="font-medium">{service.category}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Price: <span className="font-medium">${service.price}</span>
            </p>
            <button
              onClick={() => addToCart(service)}
              disabled={disabledButtons[service.id]} // Disable button conditionally
              className={`py-2 px-4 rounded-full transition-all duration-300 shadow-md transform ${
                disabledButtons[service.id]
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              {disabledButtons[service.id] ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Home;
