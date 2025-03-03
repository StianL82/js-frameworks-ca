import React, { createContext, useContext, useState } from 'react';

/**
 * Cart Context Provider
 *
 * Provides a context for managing the shopping cart state and actions.
 * This includes adding, removing, updating product quantities, and clearing the cart.
 *
 * @module CartContext
 *
 * @function useCart
 * @description Custom hook to access the cart context.
 * @returns {Object} The cart context value, including state and functions.
 *
 * @function CartProvider
 * @description Provides cart-related state and functions to the application.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The child components that will have access to the cart context.
 * @returns {JSX.Element} The CartProvider component wrapping its children.
 *
 * @function addToCart
 * @description Adds a product to the cart. If the product already exists, its quantity is increased.
 * @param {Object} product - The product to add to the cart.
 *
 * @function removeFromCart
 * @description Removes a product from the cart based on its ID.
 * @param {string} productId - The ID of the product to remove.
 *
 * @function updateQuantity
 * @description Updates the quantity of a specific product in the cart.
 * @param {string} productId - The ID of the product to update.
 * @param {number} quantity - The new quantity of the product.
 *
 * @function clearCart
 * @description Clears all products from the cart.
 */

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
