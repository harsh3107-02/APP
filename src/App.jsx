import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Receipt from "./components/Receipt";
import Analytics from "./pages/Analytics";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  const [transaction, setTransaction] = useState(null);

  return (
    <CartContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
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
