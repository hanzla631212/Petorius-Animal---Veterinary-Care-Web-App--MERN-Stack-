import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader/PageHeader';  // Ensure path is correct
import FilterBar from '../Components/FilterBar/FilterBar';  // Ensure path is correct
import Pet_Seller_Component from '../Components/Pet/Pet_Seller_Component';
import Pet_Buyer_Component from '../Components/Pet/Pet_Buyer_Component';

function Pets() {
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
  const availablePetTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish"];  // Example data
  const availableBreedTypes = ["Bulldog", "Persian", "Parrot", "Rabbit Breed"];  // Example data
  const availablePetAges = ["Puppy", "Kitten", "Adult", "Senior"];  // Example data

  // Filtering empty options
  const dropdownOptions = [
    availablePetTypes.filter(option => option),  // Filter out any empty values
    availableBreedTypes.filter(option => option),
    availablePetAges.filter(option => option)
  ];

  return (
    <div>
      <PageHeader title="PETS" />

      <FilterBar
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchValue={searchTerm}
        selectedFilters={selectedFilters}
        dropdownOptions={dropdownOptions}  // Passing the filtered options
        dropdownPlaceholders={[
          "Pet Type",    // Placeholder for Pet Type dropdown
          "Breed Type",  // Placeholder for Breed Type dropdown
          "Pet Age"      // Placeholder for Pet Age dropdown
        ]}
      />
      <Pet_Seller_Component/>
      <PageHeader title="Looking For Pets" />
      <Pet_Buyer_Component/>
      {/* The rest of your Pets page content goes here */}
    </div>
  );
}

export default Pets;
