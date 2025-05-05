import React, { useEffect, useState } from 'react';
import VeterinarianCard from './VeterinarianCard';
import './VeterinarianCard.css';
import defaultImage from '../../assets/image.jpg';

const VeterinarianList = () => {
  const [veterinarians, setVeterinarians] = useState([]);

  const dummyData = [
    {
      name: "Dr. Jane Smith",
      specialization: "Veterinary Surgeon",
      bio: "Passionate about helping animals recover and thrive.",
      image: defaultImage,
      location: "Karachi, Pakistan",
      availability: "clinic", // clinic / home / both
      petExpertise: ['Dogs', 'Cats'] // Added pet expertise
    },
    {
      name: "Dr. Mark Taylor",
      specialization: "Exotic Animal Specialist",
      bio: "Loves treating birds, reptiles, and small mammals.",
      image: defaultImage,
      location: "Islamabad, Pakistan",
      availability: "home",
      petExpertise: ['Birds', 'Reptiles', 'Small Mammals'] // Added pet expertise
    },
    {
      name: "Dr. Olivia Brown",
      specialization: "Small Animal Specialist",
      bio: "Expert in dogs, cats, and other household pets.",
      image: defaultImage,
      location: "Lahore, Pakistan",
      availability: "both",
      petExpertise: ['Dogs', 'Cats', 'Rabbits'] // Added pet expertise
    },
  ];

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await fetch('/api/veterinarians');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const vetsWithFallback = data.map(vet => ({
            ...vet,
            image: vet.image || defaultImage,
            location: vet.location || 'Location not specified',
            availability: vet.availability || 'Not specified',
            petExpertise: vet.petExpertise || ['Not specified'], // Ensure we have expertise data
          }));
          setVeterinarians(vetsWithFallback);
        } else {
          setVeterinarians(dummyData);
        }
      } catch (error) {
        console.error('Error fetching veterinarians:', error);
        setVeterinarians(dummyData);
      }
    };

    fetchVeterinarians();
  }, []);

  return (
    <div className="card-container">
      {veterinarians.map((vet, index) => (
        <VeterinarianCard key={index} vet={vet} />
      ))}
    </div>
  );
};

export default VeterinarianList;
