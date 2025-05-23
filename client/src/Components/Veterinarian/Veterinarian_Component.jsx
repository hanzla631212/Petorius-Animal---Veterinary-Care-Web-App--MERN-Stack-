import React from 'react';
import './Veterinarian_Component.css';
import Veterinarian_Card from './Veterinarian_Card';

const Veterinarian_Component = () => {
  const veterinarians = [
    {
      name: 'Dr. Hina Raza',
      specialization: 'Feline Specialist',
      experience: '8 years',
      pets: 'Cats',
      location: 'Lahore, Pakistan',
    //   image: 'https://via.placeholder.com/300x200?text=Dr.+Hina+Raza',
      bio: 'Specialist in treating cats with a gentle and stress-free approach.',
      availability: 'Clinic Visit',
    },
    {
      name: 'Dr. Usman Qureshi',
      specialization: 'General Veterinary Practitioner',
      experience: '10 years',
      pets: 'All Pets',
      location: 'Faisalabad, Pakistan',
    //   image: 'https://via.placeholder.com/300x200?text=Dr.+Usman+Qureshi',
      bio: 'Trusted vet for regular checkups, vaccinations, and first aid for all types of pets.',
      availability: 'Clinic & Home Visit',
    },
    {
        name: 'Dr. Hina Raza',
        specialization: 'Feline Specialist',
        experience: '8 years',
        pets: 'Cats',
        location: 'Lahore, Pakistan',
        // image: 'https://via.placeholder.com/300x200?text=Dr.+Hina+Raza',
        bio: 'Specialist in treating cats with a gentle and stress-free approach.',
        availability: 'Clinic Visit',
      },
      {
        name: 'Dr. Hina Raza',
        specialization: 'Feline Specialist',
        experience: '8 years',
        pets: 'Cats',
        location: 'Lahore, Pakistan',
        // image: 'https://via.placeholder.com/300x200?text=Dr.+Hina+Raza',
        bio: 'Specialist in treating cats with a gentle and stress-free approach.',
        availability: 'Clinic Visit',
      },
    // Add more vets here as needed
  ];

  return (
    <div className="veterinarian-wrapper">
      {veterinarians.map((vet, index) => (
        <Veterinarian_Card key={index} vet={vet} />
      ))}
    </div>
  );
};

export default Veterinarian_Component;
