import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
export const CartContext = createContext();

// Fournir le contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Le panier est un tableau d'articles

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Vérifie si le produit existe déjà dans le panier
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Met à jour la quantité si le produit existe déjà
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Ajoute un nouveau produit au panier
      return [...prevCart, { ...product, quantity }];
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

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook pour utiliser le contexte plus facilement
export const useCart = () => useContext(CartContext);
