import React from 'react';
import './VeterinarianCard.css';
import defaultImage from '../../assets/image.jpg';

const VeterinarianCard = ({ vet }) => {
  const imageSrc = vet.image || defaultImage;

  return (
    <div className="card">
      <img src={imageSrc} alt={vet.name} />
      <div className="card-content">
        <h2>{vet.name}</h2>
        <h3>{vet.specialization}</h3>
        <p>{vet.bio}</p>

        <p className="location"><strong>Location:</strong> {vet.location || 'Not specified'}</p>
        <p className="availability">
          <strong>Availability:</strong>{' '}
          {vet.availability === 'both'
            ? 'Home & Clinic Visits'
            : vet.availability === 'home'
            ? 'Home Visit Only'
            : vet.availability === 'clinic'
            ? 'Clinic Visit Only'
            : 'Not specified'}
        </p>

        {vet.petExpertise && vet.petExpertise.length > 0 && (
          <p className="expertise">
            <strong>Pet Expertise:</strong> {vet.petExpertise.join(', ')}
          </p>
        )}

        <button className="hire-button">Hire Vet</button>
      </div>
    </div>
  );
};

export default VeterinarianCard;
