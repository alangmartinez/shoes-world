import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add a product to the cart
  const addToCart = (productToAdd) => {
    // Check if the product is already in the cart
    const isInCart = cart.some((cartItem) => cartItem.id === productToAdd.id);

    isInCart
      ? setCart(
          cart.map((cartItem) => {
            // If it's already in the cart, increase the quantity
            if (cartItem.id == productToAdd.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              };
            } else {
              return cartItem;
            }
          })
        )
        // If it's not in the cart, add it
      : setCart([...cart, productToAdd]);
  };


  // Remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter(
        cartItem => cartItem.id !== productToRemove.id
      )
    )
  }

  // Get total price of the cart
  const getTotalPrice = () => {
    cart.reduce(
      (acc, product) => {
        return acc + product.price * product.quantity;
      }
    )
  }


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
