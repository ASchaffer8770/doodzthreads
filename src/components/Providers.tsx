'use client'; // Client-side for state/hooks

import React, { ReactNode } from 'react';
import { CartProvider } from '@/lib/CartContext'; // Pulls in your cart logic for design/clothing selections

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;