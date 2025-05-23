import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader/PageHeader';
import FilterBar from '../Components/FilterBar/FilterBar';  // Ensure path is correct
import Medicines_Component from '../Components/Medicines/Medicines_Component';

function Medicines() {
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
  const availableDiseaseTypes = ["Allergies", "Infections", "Parasites"];  // Example data
  const availablePetTypes = ["Dog", "Cat", "Bird"];  // Example data
  const availableMedicineTypes = ["Tablet", "Syrup", "Injection"];  // Example data

  // Filtering empty options
  const dropdownOptions = [
    availableDiseaseTypes.filter(option => option),  // Filter out any empty values
    availablePetTypes.filter(option => option),
    availableMedicineTypes.filter(option => option)
  ];

  return (
    <div>
      <PageHeader title="MEDICINES" />

      <FilterBar
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchValue={searchTerm}
        selectedFilters={selectedFilters}
        dropdownOptions={dropdownOptions}  // Passing the filtered options
        dropdownPlaceholders={[
          "Disease Type",
          "Pet Type",
          "Medicine Type"
        ]}
      />
      <Medicines_Component/>
      {/* The rest of your Medicines page content goes here */}
    </div>
  );
}

export default Medicines;
