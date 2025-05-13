import React, { useState } from 'react';
import './Feed.css'; // Using the same CSS as Feed

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [disease, setDisease] = useState('');
  const [type, setType] = useState('');
  const [pet, setPet] = useState('');

  const medicineData = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Effective for fever and mild pain.',
      price: 50,
      disease: 'Fever',
      type: 'Tablet',
      pets: ['Dog', 'Cat'],
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      name: 'Amoxicillin',
      description: 'Antibiotic used for infections.',
      price: 120,
      disease: 'Infection',
      type: 'Capsule',
      pets: ['Rabbit', 'Cat'],
      image: 'https://via.placeholder.com/300x200?text=Amoxicillin',
    },
    {
      id: 3,
      name: 'Cetirizine',
      description: 'Relieves allergy symptoms.',
      price: 30,
      disease: 'Allergy',
      type: 'Tablet',
      pets: ['Dog', 'Hamster'],
      image: 'https://via.placeholder.com/300x200?text=Cetirizine',
    },
    {
      id: 4,
      name: 'Metronidazole',
      description: 'Treat bacterial and parasitic infections.',
      price: 90,
      disease: 'Diarrhea',
      type: 'Tablet',
      pets: ['Dog', 'Cat'],
      image: 'https://via.placeholder.com/300x200?text=Metronidazole',
    },
    {
      id: 5,
      name: 'Prednisone',
      description: 'Steroid to reduce inflammation and immune responses.',
      price: 150,
      disease: 'Inflammation',
      type: 'Tablet',
      pets: ['Dog', 'Cat', 'Rabbit'],
      image: 'https://via.placeholder.com/300x200?text=Prednisone',
    },
  ];

  const filtered = medicineData.filter(med => {
    return (
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (disease ? med.disease === disease : true) &&
      (type ? med.type === type : true) &&
      (pet ? med.pets.includes(pet) : true)
    );
  });

  const resetFilters = () => {
    setSearchTerm('');
    setDisease('');
    setType('');
    setPet('');
  };

  return (
    <div className="feed-container">
      <h1 className="section-title">MEDICINES</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={disease} onChange={e => setDisease(e.target.value)}>
          <option value="">All Diseases</option>
          {[...new Set(medicineData.map(med => med.disease))].map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All Types</option>
          {[...new Set(medicineData.map(med => med.type))].map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>
        <select value={pet} onChange={e => setPet(e.target.value)}>
          <option value="">All Pets</option>
          {[...new Set(medicineData.flatMap(m => m.pets))].map((p, i) => (
            <option key={i} value={p}>{p}</option>
          ))}
        </select>
        <button className="reset-btn" onClick={resetFilters}>Reset</button>
      </div>

      <div className="card-grid">
        {filtered.length ? (
          filtered.map(med => (
            <div className="feed-card" key={med.id}>
              <img src={med.image} alt={med.name} className="feed-card-image" />
              <div className="card-content">
                <div className="feed-name">
                  <h2>{med.name}</h2>
                </div>
                <div className="feed-description">
                  <p>{med.description}</p>
                </div>
                <div className="feed-disease">
                <strong>Disease: </strong>{med.disease} {/* Bold for Type */}
                  {/* <p>{med.disease}</p> Regular font for Disease */}
                </div>
                <div className="feed-type">
                  <strong>Type: </strong>{med.type} {/* Bold for Type */}
                </div>
                <div className="feed-pet">
                  <strong>For: </strong>{med.pets.join(', ')} {/* Bold for For */}
                </div>
                <div className="feed-price">
                  <strong>PKR {med.price}</strong>
                </div>
                <div className="order-btn-container">
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No results" />
            <p>No Medicines Found. Try changing the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;
