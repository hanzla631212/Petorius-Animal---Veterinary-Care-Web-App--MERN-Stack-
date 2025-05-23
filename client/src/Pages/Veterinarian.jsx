import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader/PageHeader';  // Ensure path is correct
import FilterBar from '../Components/FilterBar/FilterBar';  // Ensure path is correct
import Veterinarian_Component from '../Components/Veterinarian/Veterinarian_Component';

function Veterinarian() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([null, null, null]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedFilters([null, null, null]);
  };

  // Example dynamic data for dropdown options
  const availableSpecialties = ["Surgery", "Dermatology", "Dentistry", "Cardiology"];  // Example data
  const availablePetTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish"];  // Example data
  const availableExperienceLevels = ["Junior", "Senior", "Specialist", "Consultant"];  // Example data

  // Filtering empty options
  const dropdownOptions = [
    availableSpecialties.filter(option => option),  // Filter out any empty values
    availablePetTypes.filter(option => option),
    availableExperienceLevels.filter(option => option)
  ];

  return (
    <div>
      <PageHeader title="VETERINARIAN" />

      <FilterBar
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchValue={searchTerm}
        selectedFilters={selectedFilters}
        dropdownOptions={dropdownOptions}  // Passing the filtered options
        dropdownPlaceholders={[
          "Specialty",        // Placeholder for Specialty dropdown
          "Pet Type",         // Placeholder for Pet Type dropdown
          "Experience Level"  // Placeholder for Experience Level dropdown
        ]}
      />

        <Veterinarian_Component/>
      {/* The rest of your Veterinarian page content goes here */}
    </div>
  );
}

export default Veterinarian;
