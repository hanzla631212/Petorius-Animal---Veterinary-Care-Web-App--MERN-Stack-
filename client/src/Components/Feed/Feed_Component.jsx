import React, { useState } from 'react';
import Feed_Card from './Feed_Card';
import './Feed_Component.css';


const Feed_Component = () => {
  const feeds = [
    {
      name: 'NutriPaws Adult Dog Food',
      description: 'Balanced dry kibble for adult dogs to support healthy digestion.',
      type: 'Dry Food',
      pet: 'Dogs',
      brand: 'NutriPaws',
      price: 1200,
      image: 'https://via.placeholder.com/300x200?text=NutriPaws+Dog+Food',
    },
    {
      name: 'Feline Feast Wet Cat Food',
      description: 'Moist and flavorful wet food with essential nutrients for cats of all ages. Moist and flavorful wet food with essential nutrients for cats of all ages.Moist and flavorful wet food with essential nutrients for cats of all ages.',
      type: 'Wet Food',
      pet: 'Cats',
      brand: 'Feline Feast',
      price: 850,
      image: 'https://via.placeholder.com/300x200?text=Feline+Feast',
    },
    {
      name: 'BirdieMix Premium Bird Feed',
      description: 'Nutritious seed mix formulated for small to medium-sized birds.',
      type: 'Seed Mix',
      pet: 'Birds',
      brand: 'BirdieMix',
      price: 600,
      image: 'https://via.placeholder.com/300x200?text=BirdieMix+Seed',
    },
    {
      name: 'HappyHamster Pellet',
      description: 'Complete pellet feed specially made for hamsters and small rodents.Complete pellet feed specially made for hamsters and small rodents.Complete pellet feed specially made for hamsters and small rodents.',
      type: 'Pellet',
      pet: 'Small Cute Rodents',
      brand: 'HappyHamster',
      price: 400,
      image: 'https://via.placeholder.com/300x200?text=HappyHamster',
    },
    {
      name: 'PuppyGrow Milk Replacement',
      description: 'Nutrient-rich milk formula designed to support healthy puppy growth.',
      type: 'Milk Replacement',
      pet: 'Puppies',
      brand: 'PuppyGrow',
      price: 950,
      image: 'https://via.placeholder.com/300x200?text=PuppyGrow+Milk',
    },
    {
      name: 'KittyCrunch Treats',
      description: 'Delicious crunchy treats enriched with vitamins for cats.',
      type: 'Treats',
      pet: 'Cats',
      brand: 'KittyCrunch',
      price: 300,
      image: 'https://via.placeholder.com/300x200?text=KittyCrunch',
    },
  ];
  

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="feeds-grid">
      {feeds.map((feed, index) => (
        <Feed_Card
          key={index}
          feed={feed}
          expanded={expandedIndex === index}
          onToggleExpand={() => toggleExpand(index)}
        />
      ))}
    </div>
  );
};

export default Feed_Component;
