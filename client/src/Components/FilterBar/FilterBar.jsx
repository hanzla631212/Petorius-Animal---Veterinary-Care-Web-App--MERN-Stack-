import React, { useState } from "react";
import './FilterBar.css';

const FilterBar = ({
  onSearchChange,
  onFilterChange,
  onReset,
  searchValue = "",
  dropdownOptions = [[], [], []],
  selectedFilters = [null, null, null],
  dropdownPlaceholders = ["Select Option 1", "Select Option 2", "Select Option 3"], // Custom placeholders
}) => {
  const [search, setSearch] = useState(searchValue);
  const [filters, setFilters] = useState(selectedFilters);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilterChange = (index, value) => {
    const newFilters = [...filters];
    newFilters[index] = value;
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    setSearch("");
    setFilters([null, null, null]);
    onReset();
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="search-box"
      />
      {dropdownOptions.map((options, index) => (
        <select
          key={index}
          value={filters[index] || ""}
          onChange={(e) => handleFilterChange(index, e.target.value)}
          className="dropdown"
        >
          <option value="">{dropdownPlaceholders[index]}</option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      ))}
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
};

export default FilterBar;
