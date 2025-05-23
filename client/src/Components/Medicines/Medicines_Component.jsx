import React, { useState } from 'react';
import Medicines_Card from './Medicines_Card';
import './Medicines_Component.css';

const Medicines_Component = () => {
  const medicines = [
    {
      name: 'Petamin Syrup',
      description: 'Vitamin supplement for pets to boost immune system and overall health.',
      type: 'Syrup Yuumy',
      pet: 'Dogs & Cats',
      disease: 'Weak Immunity',
      price: 650,
      image: 'https://via.placeholder.com/300x200?text=Petamin+Syrup',
    },
    {
      name: 'CanineGuard Tablets',
      description: 'Effective deworming medicine for dogs to treat various parasites.Effective deworming medicine for dogs to treat various parasites.Effective deworming medicine for dogs to treat various parasites.',
      type: 'Tablet',
      pet: 'Dogs',
      disease: 'Worms',
      price: 800,
      image: 'https://via.placeholder.com/300x200?text=CanineGuard',
    },
    {
      name: 'MeowVit Drops',
      description: 'Liquid multivitamin for cats, improves coat health and energy.Effective deworming medicine for dogs to treat various parasites.',
      type: 'Liquid',
      pet: 'Cats',
      disease: 'Deficiency',
      price: 450,
      image: 'https://via.placeholder.com/300x200?text=MeowVit',
    },
    {
      name: 'FurCare Ointment',
      description: 'Topical cream for treating skin infections and irritation in pets.',
      type: 'Ointment',
      pet: 'All Pets',
      disease: 'Skin Infection',
      price: 550,
      image: 'https://via.placeholder.com/300x200?text=FurCare',
    },
  ];

  // Track only one expanded card index, or null if none expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="medicines-grid">
      {medicines.map((medicine, index) => (
        <Medicines_Card
          key={index}
          medicine={medicine}
          expanded={expandedIndex === index}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
};

export default Medicines_Component;
