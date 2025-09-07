'use client'; // Client for state/interactivity

import React, { useState } from 'react';
import { useCart } from '@/lib/CartContext';

// Mock designs (replace with Printify API fetch for real previews/products)
const mockDesigns = [
  { id: 'design1', name: 'Cool Graphic', preview: '/designs/1.png' },
  { id: 'design2', name: 'Funny Quote', preview: '/designs/2.png' },
];

const clothingOptions = ['t-shirt', 'hoodie', 'mug'];

interface DesignSelectorProps {
  onSelect?: (designId: string) => void; // Optional callback for selection
}

const DesignSelector: React.FC<DesignSelectorProps> = ({ onSelect }) => {
  const { addToCart } = useCart();
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<string>(clothingOptions[0]);

  const handleSelectDesign = (id: string) => {
    setSelectedDesign(id);
    if (onSelect) onSelect(id);
  };

  const handleAddToCart = () => {
    if (selectedDesign) {
      addToCart({ designId: selectedDesign, clothingType: selectedClothing, quantity: 1 });
      alert('Added to cart! Customize more or checkout with Stripe.'); // Toast in prod
    }
  };

  return (
    <div className="design-selector liquid-glass">
      <h2 className="text-xl font-semibold mb-4">Select Design & Clothing</h2>
      <div className="designs grid grid-cols-2 gap-4">
        {mockDesigns.map((design) => (
          <button
            key={design.id}
            onClick={() => handleSelectDesign(design.id)}
            className={`p-2 border rounded liquid-glass ${selectedDesign === design.id ? 'border-blue-500' : 'border-transparent'}`}
          >
            <img src={design.preview} alt={design.name} className="w-full h-32 object-cover mb-2" />
            <span>{design.name}</span>
          </button>
        ))}
      </div>
      <select
        value={selectedClothing}
        onChange={(e) => setSelectedClothing(e.target.value)}
        className="mt-4 p-2 border rounded w-full liquid-glass"
      >
        {clothingOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <button
        onClick={handleAddToCart}
        disabled={!selectedDesign}
        className="add-to-cart-btn mt-4 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DesignSelector;