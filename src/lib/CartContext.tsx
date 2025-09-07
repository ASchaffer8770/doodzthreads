'use client'; // Client component for hooks

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for cart items (e.g., design ID, clothing type, quantity)
interface CartItem {
  designId: string;
  clothingType: string; // e.g., 't-shirt', 'hoodie'
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (designId: string, clothingType: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]); // Simple add; enhance for duplicates if needed
  };

  const removeFromCart = (designId: string, clothingType: string) => {
    setCart((prev) => prev.filter((i) => i.designId !== designId || i.clothingType !== clothingType));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};