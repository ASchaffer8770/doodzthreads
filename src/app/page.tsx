'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="landing-page bg-[#353535] text-[#FCF7FF] font-sans">
      {/* Header with 5.11 Tactical-inspired Nav */}
      <header className="bg-[#1A1A1A] text-[#FCF7FF] py-4 border-b border-[#8A897C]">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold uppercase">Doodz Threads</h1>
          <nav className="flex space-x-6">
            <Link href="/shop" className="hover:text-[#18FFEA] font-semibold">Shop</Link>
            <Link href="/design-studio" className="hover:text-[#18FFEA] font-semibold">Design Studio</Link>
            <Link href="/about" className="hover:text-[#18FFEA] font-semibold">About</Link>
            <Link href="/cart" className="hover:text-[#18FFEA] font-semibold">Cart</Link>
            <Link href="/account" className="hover:text-[#18FFEA] font-semibold">Account</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section: Bold Welcome */}
      <section className="hero bg-[#2D2D2D] py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 uppercase tracking-wide text-[#20A4F3]">Gear Up with Custom Designs</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-[#8A897C]">Unleash your inner warrior with Doodz Threads. Customize t-shirts, hoodies, and more with bold designs, powered by print-on-demand.</p>
        <Link href="/shop" className="bg-[#18FFEA] text-[#353535] px-8 py-4 rounded-lg hover:bg-[#20A4F3] hover:text-[#FCF7FF] transition-all duration-300 font-bold text-lg">Lock & Load</Link>
      </section>

      {/* Featured Products */}
      <section className="featured py-16 text-center">
        <h2 className="text-4xl font-bold mb-10 text-[#18FFEA] uppercase">Featured Gear</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 uppercase text-[#20A4F3]">Tactical T-Shirts</h3>
            <p className="text-sm text-[#8A897C]">Rock your style with rugged, custom designs.</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 uppercase text-[#20A4F3]">Combat Hoodies</h3>
            <p className="text-sm text-[#8A897C]">Stay warm with bold, personalized flair.</p>
          </div>
          <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 uppercase text-[#20A4F3]">Elite Gear</h3>
            <p className="text-sm text-[#8A897C]">Top-tier picks for the fearless.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-[#2D2D2D] py-16 text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase text-[#20A4F3]">Ready for Battle?</h2>
        <Link href="/design-studio" className="text-[#18FFEA] underline hover:text-[#FCF7FF] text-xl font-semibold hover:underline-offset-4">Create Your Gear Now</Link>
      </section>
    </div>
  );
}