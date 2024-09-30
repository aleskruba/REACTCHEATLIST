import React, { useState } from 'react';

function ResultsLeft({ searchedText, setSearchedText, setFilters }: any) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState<number>(0);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);

  const facilities = ['swimmingPool', 'fitnessCenter', 'restaurant', 'bar', 'spa', 'businessCenter', 'laundryService', 'roomService'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
    setFilters((prev: any) => ({ ...prev, minPrice: 0, maxPrice: value }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRating(value);
    setFilters((prev: any) => ({ ...prev, rating: value }));
  };

  const handleFacilitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const facility = e.target.value;
    const newFacilities = selectedFacilities.includes(facility)
      ? selectedFacilities.filter((f) => f !== facility)
      : [...selectedFacilities, facility];

    setSelectedFacilities(newFacilities);
    setFilters((prev: any) => ({ ...prev, facilities: newFacilities.join(',') }));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Search hotel..."
        value={searchedText}
      />
      <div className='range'>
        <label>Price Range (0 - 1000): </label>
        <div className='range-inner'>
            <input type="range" min="0" max="1000" onChange={handlePriceChange} value={priceRange[1]} />
            <span>${priceRange[1]}</span>
        </div>
      </div>
      <div className='range'>
        <label>Rating (0 - 5): </label>
        <div className='range-inner'>
            <input type="range" min="0" max="5" step="0.1" onChange={handleRatingChange} value={rating} />
            <span>{rating}</span>
        </div>
      </div>
      <div>
        <h4>Facilities</h4>
        {facilities.map((facility) => (
          <div key={facility}>
            <input
              type="checkbox"
              value={facility}
              onChange={handleFacilitiesChange}
              checked={selectedFacilities.includes(facility)}
            />
            <label>{facility}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsLeft;
