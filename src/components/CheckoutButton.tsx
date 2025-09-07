'use client';

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/lib/CartContext';

// Load Stripe with your key from env (for customer payments on custom clothing)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutButtonProps {
  className?: string; // Optional className for glassy styling
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ className = '' }) => {
  const { cart } = useCart();

  const handleCheckout = async () => {
    if (cart.length === 0) return alert('Cart empty—add some designs to your favorite clothing first!');

    const stripe = await stripePromise;
    if (!stripe) return;

    // POST cart to /api/checkout (creates session, saves order for Printify on-demand print)
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }), // Includes design/clothing selections
    });

    const { sessionId } = await response.json();
    stripe.redirectToCheckout({ sessionId });
  };

  return (
    <button 
      onClick={handleCheckout} 
      className={`px-6 py-3 rounded-lg font-bold liquid-glass ${className}`} // Merge with glassy base
    >
      Checkout with Stripe
    </button>
  );
};

export default CheckoutButton;