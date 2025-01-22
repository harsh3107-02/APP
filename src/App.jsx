import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Receipt from "./components/Receipt";
import Analytics from "./components/Analytics";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  const [transaction, setTransaction] = useState(null);

  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ServiceList />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              transaction ? (
                <Receipt transaction={transaction} />
              ) : (
                <CheckoutForm onComplete={setTransaction} />
              )
            }
          />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
