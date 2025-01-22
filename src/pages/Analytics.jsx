import React from "react";

const Analytics = () => {
  const revenue = 2000; 
  const servicesSold = 50; 

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      <p>Total Revenue: ${revenue}</p>
      <p>Total Services Sold: {servicesSold}</p>
    </div>
  );
};

export default Analytics;
