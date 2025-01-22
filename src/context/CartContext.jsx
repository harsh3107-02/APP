import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingService = state.find(item => item.id === action.payload.id);
      if (existingService) {
      
        return state.map(item =>
          item.id === action.payload.id ?
          { ...item, quantity: item.quantity + 1 } :
          item
        );
      } else {
        
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload.id);
    case "INCREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id ?
        { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREASE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1 ?
        { ...item, quantity: item.quantity - 1 } : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
