import React, { useState } from 'react';
import Pet_Card from './Pet_Seller_Card';
import './Pet_Seller_Component.css';

const Pet_Seller_Component = () => {
  const pets = [
    {
      name: 'Charlie',
      breed: 'Golden Retriever',
      price: '1500',
      age: '2 Years',
      type: 'Dog',
      description: 'Friendly and energetic dog looking for a loving home.',
      image: 'https://via.placeholder.com/300x200?text=Charlie',
    },
    {
      name: 'Milo',
      breed: 'Persian Cat',
      age: '1.5 Years',
      type: 'Cat',
      description: 'Calm and affectionate Persian cat who loves to cuddle.',
      image: 'https://via.placeholder.com/300x200?text=Milo',
    },
    {
      name: 'Max',
      breed: 'German Shepherd',
      age: '3 Years',
      type: 'Dog',
      description: 'Smart and loyal guard dog trained for obedience.',
      image: 'https://via.placeholder.com/300x200?text=Max',
    },
    {
      name: 'Luna',
      breed: 'Rabbit',
      age: '8 Months',
      type: 'Rabbit',
      description: 'Small, quiet rabbit who enjoys carrots and attention.',
      image: 'https://via.placeholder.com/300x200?text=Luna',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="pets-grid">
      {pets.map((pet, index) => (
        <Pet_Card
          key={index}
          pet={pet}
          expanded={expandedIndex === index}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
};

export default Pet_Seller_Component;
