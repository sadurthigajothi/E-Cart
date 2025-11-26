import { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: prev[id] - 1 > 0 ? prev[id] - 1 : 0
      };
    });
  };

  const getTotalcartitems = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,  
        cartItems,
        addToCart,
        removeFromCart,
        getTotalcartitems
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
