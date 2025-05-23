import React, { useState } from 'react';
import Pet_Buyer_Card from './Pet_Buyer_Card';
import './Pet_Buyer_Component.css';

const Pet_Buyer_Component = () => {
  const buyerRequests = [
    {
      name: 'Ali',
      breed: 'Golden Retriever',
      priceRange: '1500 - 2000',
      age: '2-3 Years',
      type: 'Dog',
      description: 'Looking for a friendly Golden Retriever for family companionship.',
    },
    {
      name: 'Sara',
      breed: 'Persian Cat',
      priceRange: '1000 - 1800',
      age: '1-2 Years',
      type: 'Cat',
      description: 'Searching for a fluffy Persian cat, preferably white or cream-colored.',
    },
    {
      name: 'Ahmed',
      breed: 'German Shepherd',
      priceRange: '2000 - 2500',
      age: '2-4 Years',
      type: 'Dog',
      description: 'Needs a well-trained German Shepherd for security purposes.',
    },
    {
      name: 'Zara',
      breed: 'Rabbit',
      priceRange: '500 - 800',
      age: 'Under 1 Year',
      type: 'Rabbit',
      description: 'Wants a young rabbit for her children to raise as a pet.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="buyer-grid">
      {buyerRequests.map((buyer, index) => (
        <Pet_Buyer_Card
          key={index}
          buyer={buyer}
          expanded={expandedIndex === index}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
};

export default Pet_Buyer_Component;
