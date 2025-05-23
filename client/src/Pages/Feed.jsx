import React, { useState } from 'react';
import PageHeader from '../Components/PageHeader/PageHeader';
import FilterBar from '../Components/FilterBar/FilterBar';  // Ensure path is correct
import Feed_Component from '../Components/Feed/Feed_Component';
// import Feed_Card from '../Components/Feed/Feed_Card';

function Feed() {
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
  const availableFeedTypes = ["Dry Food", "Wet Food", "Supplements"];  // Example data
  const availablePetTypes = ["Dog", "Cat", "Bird", "Rabbit", "Fish"];  // Example data
  const availableFeedBrands = ["Pedigree", "Wellness", "Nutro"];  // Example data

  // Filtering empty options
  const dropdownOptions = [
    availableFeedTypes.filter(option => option),  // Filter out any empty values
    availablePetTypes.filter(option => option),
    availableFeedBrands.filter(option => option)
  ];

  return (
    <div>
      <PageHeader title="FEED" />

      <FilterBar
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
        searchValue={searchTerm}
        selectedFilters={selectedFilters}
        dropdownOptions={dropdownOptions}  // Passing the filtered options
        dropdownPlaceholders={[
          "Feed Type",  // Placeholder for Feed Type dropdown
          "Pet Type",   // Placeholder for Pet Type dropdown
          "Feed Brand"   // Placeholder for Feed Brand dropdown
        ]}
      />
      {/* <Feed_Card/> */}
      <Feed_Component/>
      {/* The rest of your Feed page content goes here */}
    </div>
  );
}

export default Feed;
