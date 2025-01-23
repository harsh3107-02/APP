import React from "react";

const Analytics = () => {
  const revenue = 2000; 
  const servicesSold = 50; 

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Analytics Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Total Revenue</h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">${revenue}</p>
            </div>
            <div className="text-blue-600 bg-blue-100 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m12 18l-4-4m0 0l-4 4m4-4v5"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">Services Sold</h3>
              <p className="text-2xl font-bold text-green-600 mt-2">{servicesSold}</p>
            </div>
            <div className="text-green-600 bg-green-100 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 3h10M5 21l4-4-4-4M15 12h7m-7 5h7m-7-10h7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
