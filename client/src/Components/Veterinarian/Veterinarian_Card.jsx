import React from 'react';
import './Veterinarian_Card.css';
import defaultImage from '../../assets/image.jpg';

// Icons
import { FaUserMd, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { GiSittingDog } from 'react-icons/gi';
import { MdEventAvailable } from 'react-icons/md';

const Veterinarian_Card = ({ vet }) => {
  return (
    <div className="vet-card">
      <img
        src={vet.image ? vet.image : defaultImage}
        alt={vet.name}
        className="vet-img"
      />
      <div className="vet-details">
        <h2>{vet.name}</h2>

        <div className="vet-meta">
          <FaUserMd className="vet-icon" aria-hidden="true" />
          <span>{vet.specialization}</span>
        </div>

        <p className="vet-bio">{vet.bio}</p>

        <div className="vet-meta">
          <FaBriefcase className="vet-icon" aria-hidden="true" />
          <span><strong>Experience:</strong> {vet.experience}</span>
        </div>

        <div className="vet-meta">
          <GiSittingDog className="vet-icon" aria-hidden="true" />
          <span><strong>Pet Expertise:</strong> {vet.pets}</span>
        </div>

        <div className="vet-meta">
          <FaMapMarkerAlt className="vet-icon" aria-hidden="true" />
          <span><strong>Location:</strong> {vet.location}</span>
        </div>

        <div className="vet-meta">
          <MdEventAvailable className="vet-icon" aria-hidden="true" />
          <span><strong>Availability:</strong> {vet.availability}</span>
        </div>

        <button className="hire-button">Hire Vet</button>
      </div>
    </div>
  );
};

export default Veterinarian_Card;
