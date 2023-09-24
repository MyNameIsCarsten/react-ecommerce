import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Loop through all cartItems
    for (const item in cartItems) {
      // Check if amount (value) is item (key) is bigger than 0
      if (cartItems[item] > 0) {
        // Find items in array which satisfy condition: id of item in PRODUCTS array === item from cartItems array
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        // totalAmount = totalAmount + amount (cartItems[item]) * price (itemInfo.price)
        totalAmount += cartItems[item] * itemInfo.price
      }
    }

    return totalAmount
  };

  const getTotalCount = () => {
    let totalCount = 0;

    // Loop through all cartItems
    for (const item in cartItems) {
      // Check if amount (value) is item (key) is bigger than 0
      if (cartItems[item] > 0) {
        // totalAmount = totalAmount + amount (cartItems[item]) * price (itemInfo.price)
        totalCount += cartItems[item]
      }
    }

    return totalCount
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      // 1: 0 --> 1: 1
      [itemId]: prev[itemId] + 1
    }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      // 1: 1 --> 1: 0
      [itemId]: prev[itemId] - 1
    }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount
    }))
  }

  // object to be passed to children
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCount
  }


  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
