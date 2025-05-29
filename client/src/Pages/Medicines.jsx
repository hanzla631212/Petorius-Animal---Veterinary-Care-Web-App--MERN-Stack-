import React, { useState, useEffect } from 'react';
import './Medicines.css';

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ disease: '', type: '', pet: '' });

  const [diseaseOptions, setDiseaseOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [petOptions, setPetOptions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const medicineData = [
      {
        id: 1,
        name: 'Paracetamol',
        description: 'Effective for fever and mild pain.',
        price: 'RS: 50',
        disease: 'Fever',
        type: 'Tablet',
        pets: ['Dog', 'Cat'],
        image: 'data:image/jpeg;base64,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'
      },
      {
        id: 2,
        name: 'Amoxicillin',
        description: 'Antibiotic used for infections.',
        price: 'RS: 120',
        disease: 'Infection',
        type: 'Capsule',
        pets: ['Rabbit', 'Cat'],
        image: 'data:image/jpeg;base64,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'
      },
      {
        id: 3,
        name: 'Cetirizine',
        description: 'Relieves allergy symptoms.',
        price: 'RS: 30',
        disease: 'Allergy',
        type: 'Tablet',
        pets: ['Dog', 'Hamster'],
        image: 'data:image/jpeg;base64,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',
      },
      {
        id: 4,
        name: 'Metronidazole',
        description: 'Used to treat bacterial and parasitic infections.',
        price: 'RS: 90',
        disease: 'Diarrhea',
        type: 'Tablet',
        pets: ['Dog', 'Cat'],
        image: 'https://via.placeholder.com/150?text=Metronidazole',
      },
      {
        id: 5,
        name: 'Prednisone',
        description: 'Steroid to reduce inflammation and immune responses.',
        price: 'RS: 150',
        disease: 'Inflammation',
        type: 'Tablet',
        pets: ['Dog', 'Cat', 'Rabbit'],
        image: 'https://via.placeholder.com/150?text=Prednisone',
      },
      {
        id: 6,
        name: 'Ivermectin',
        description: 'Used to treat parasitic infestations.',
        price: 'RS: 75',
        disease: 'Parasites',
        type: 'Liquid',
        pets: ['Dog', 'Hamster'],
        image: 'https://via.placeholder.com/150?text=Ivermectin',
      },
      {
        id: 7,
        name: 'Enrofloxacin',
        description: 'Broad-spectrum antibiotic.',
        price: 'RS: 200',
        disease: 'Infection',
        type: 'Injection',
        pets: ['Cat', 'Dog'],
        image: 'https://via.placeholder.com/150?text=Enrofloxacin',
      },
      {
        id: 8,
        name: 'Levocetirizine',
        description: 'Effective for seasonal allergies and itching.',
        price: 'RS: 60',
        disease: 'Allergy',
        type: 'Syrup',
        pets: ['Dog', 'Rabbit'],
        image: 'https://via.placeholder.com/150?text=Levocetirizine',
      },
      {
        id: 9,
        name: 'Benzylpenicillin',
        description: 'Used to treat a variety of bacterial infections.',
        price: 'RS: 180',
        disease: 'Infection',
        type: 'Injection',
        pets: ['Cat', 'Rabbit'],
        image: 'https://via.placeholder.com/150?text=Benzylpenicillin',
      },
      {
        id: 10,
        name: 'Diphenhydramine',
        description: 'Used to relieve allergy symptoms.',
        price: 'RS: 40',
        disease: 'Allergy',
        type: 'Tablet',
        pets: ['Dog', 'Cat'],
        image: 'https://via.placeholder.com/150?text=Diphenhydramine',
      },
    ];

    setMedicines(medicineData);
    setFilteredMedicines(medicineData);

    setDiseaseOptions([...new Set(medicineData.map((m) => m.disease))]);
    setTypeOptions([...new Set(medicineData.map((m) => m.type))]);

    const allPets = medicineData.flatMap((m) => m.pets);
    setPetOptions([...new Set(allPets)]);
  }, []);

  useEffect(() => {
    const result = medicines.filter((med) => {
      const nameMatch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
      const diseaseMatch = filter.disease ? med.disease.toLowerCase().includes(filter.disease.toLowerCase()) : true;
      const typeMatch = filter.type ? med.type.toLowerCase().includes(filter.type.toLowerCase()) : true;
      const petMatch = filter.pet ? med.pets.some(pet => pet.toLowerCase().includes(filter.pet.toLowerCase())) : true;
      return nameMatch && diseaseMatch && typeMatch && petMatch;
    });
    setFilteredMedicines(result);
  }, [searchTerm, filter, medicines]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = medicines.filter((med) =>
        med.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.map((med) => med.name));
    } else {
      setSuggestions([]);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilter({ disease: '', type: '', pet: '' });
    setSuggestions([]);
  };

  return (
    <div className="medicines-container">
      <h1>Veterinary Medicines</h1>
      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by medicine name..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion, i) => (
                <div key={i} className="suggestion-item">{suggestion}</div>
              ))}
            </div>
          )}
        </div>

        <div className="filter-inputs">
          <select name="disease" value={filter.disease} onChange={handleFilterChange}>
            <option value="">Select Disease</option>
            {diseaseOptions.map((disease) => (
              <option key={disease} value={disease}>{disease}</option>
            ))}
          </select>

          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">Select Type</option>
            {typeOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <select name="pet" value={filter.pet} onChange={handleFilterChange}>
            <option value="">Select Pet</option>
            {petOptions.map((pet) => (
              <option key={pet} value={pet}>{pet}</option>
            ))}
          </select>
        </div>

        <button className="reset-button" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="medicine-cards">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med) => (
            <div key={med.id} className="med-card">
              <img src={med.image} alt={med.name} />
              <div className="med-card-content">
                <h3>{med.name}</h3>
                <p>{med.description}</p>
                <p><strong>Disease:</strong> {med.disease}</p>
                <p><strong>Type:</strong> {med.type}</p>
                <p><strong>For Pets:</strong> {med.pets.join(', ')}</p>
                <p className="price">{med.price}</p>
                <button className="order-button">Order Now</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No results" />
            <p>No medicines found. Try changing the filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Medicines;






