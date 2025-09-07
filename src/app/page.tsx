'use client'; // Client for any interactivity (e.g., future hooks)

import React from 'react';
import Link from 'next/link';
import CheckoutButton from '@/components/CheckoutButton'; // For CTA integration

export default function LandingPage() {
  return (
    <div className="landing-page bg-[var(--background)] text-[var(--foreground)] font-sans"> {/* San Francisco inspired */}
      {/* Hero Section: Fluid Glassy Welcome */}
      <section className="hero min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Doodz Threads</h1>
        <p className="text-2xl mb-8 max-w-2xl">Unleash your style with custom print-on-demand clothing. Pick epic designs, apply to your favorite pieces—like t-shirts, hoodies, or mugs—and let us handle the rest with seamless Stripe payments and Printify fulfillment.</p>
        <Link href="/shop" className="cta-btn">Start Customizing</Link> {/* Link to shop page or DesignSelector */}
      </section>

      {/* Features Section: Glassy Cards for E-Commerce Flow */}
      <section className="features container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Doodz Threads?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <img src="/designs/preview1.png" alt="Design on Hoodie" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Endless Designs for Any Clothing</h3>
            <p>Browse our gallery, select a design, and apply it to your desired piece—t-shirts, hoodies, or more. Preview in real-time before adding to cart.</p>
          </div>
          <div className="feature-card">
            <img src="/designs/preview2.png" alt="Cart with Custom Items" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Seamless Cart & Stripe Checkout</h3>
            <p>Add your customized clothing, review your cart, and pay securely with Stripe. Fast, safe, and ready for on-demand magic.</p>
          </div>
          <div className="feature-card">
            <img src="/designs/preview3.png" alt="Printify Fulfillment" className="w-full h-48 object-cover rounded-t-2xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Printify Powers On-Demand Fulfillment</h3>
            <p>Once paid, Printify prints your designs on high-quality clothing and ships worldwide—no inventory hassles for you.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer: Integrate Checkout */}
      <footer className="cta bg-gray-900 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your Custom Gear?</h2>
        <CheckoutButton className="cta-btn" /> {/* Starts Stripe flow for demo */}
      </footer>
    </div>
  );
}