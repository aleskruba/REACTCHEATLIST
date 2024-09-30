import React, { useEffect, useState } from 'react';
import Results from '../components/Results';
import ResultsLeft from '../components/ResultsLeft';
import { Hotel } from '../types/types';
import useDebounce from '../components/useDebounce';

const CheckBox = () => {
  const [hotels, setHotels] = useState<Hotel[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchedText, setSearchedText] = useState<string>('');
  const [filters, setFilters] = useState<any>({});

  const { debouncedValue, debounceLoading } = useDebounce(searchedText, 1000);

  const url = 'http://localhost:4000/hotels';

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const query = new URLSearchParams({
          search: searchedText,
          ...filters,
        });

        const data = await fetch(`${url}?${query.toString()}`);
        const result = await data.json();

        setHotels(result.hotels);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchHotels();
    console.log('fetched')
  }, [searchedText, filters]);

  const hotelsDataFiltered = hotels?.filter((hotel: any) =>
    hotel.hotelName.toLowerCase().includes(debouncedValue ? debouncedValue.toLowerCase() : '')
  );

  return (
    <>
    <div className="hotels">
      <div className="hotels-left">
        <div className="hotels-left-search">
          <ResultsLeft
            searchedText={searchedText}
            setSearchedText={setSearchedText}
            setFilters={setFilters}
          />
        </div>
      </div>

      <div className="hotels-right">
        <Results isLoading={isLoading} hotelsDataFiltered={hotelsDataFiltered} debounceLoading={debounceLoading} />
      </div>


    </div>
      <div className="code" style={{marginTop:'300px'}}>
      <pre><code>{codeString}</code></pre>


      </div>
      </>
);
};
      const codeString = `

      import React, { useEffect, useState } from 'react';
import Results from '../components/Results';
import ResultsLeft from '../components/ResultsLeft';
import { Hotel } from '../types/types';
import useDebounce from '../components/useDebounce';

const CheckBox = () => {
  const [hotels, setHotels] = useState<Hotel[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchedText, setSearchedText] = useState<string>('');
  const [filters, setFilters] = useState<any>({});

  const { debouncedValue, debounceLoading } = useDebounce(searchedText, 1000);

  const url = 'http://localhost:4000/hotels';

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const query = new URLSearchParams({
          search: searchedText,
          ...filters,
        });

        const data = await fetch(\`\${url}?\${query.toString()}\`);
        const result = await data.json();

        setHotels(result.hotels);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchHotels();
    console.log('fetched')
  }, [searchedText, filters]);

  const hotelsDataFiltered = hotels?.filter((hotel: any) =>
    hotel.hotelName.toLowerCase().includes(debouncedValue ? debouncedValue.toLowerCase() : '')
  );

  return (
    <div className="hotels">
      <div className="hotels-left">
        <div className="hotels-left-search">
          <ResultsLeft
            searchedText={searchedText}
            setSearchedText={setSearchedText}
            setFilters={setFilters}
          />
        </div>
      </div>

      <div className="hotels-right">
        <Results isLoading={isLoading} hotelsDataFiltered={hotelsDataFiltered} debounceLoading={debounceLoading} />
      </div>


    </div>
  );
};
      
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
            <span>\${priceRange[1]}</span>
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


const Results = ({isLoading,hotelsDataFiltered,debounceLoading}:any) => {

return (
  <div>
    {isLoading && <p>Loading...</p>}
      {hotelsDataFiltered?.map((hotel: any) => (
        <p key={hotel.hotelName}>{hotel.hotelName}</p>
      ))}
      <h1>{!hotelsDataFiltered?.length && !debounceLoading ? 'NO RECORD' : ''}</h1>
  </div>
);

}

export default Results;

export const  hotels = [
    {
      "hotelName": "Grand Plaza Hotel",
      "address": {
        "street": "123 Luxury Avenue",
        "city": "New York",
        "postalCode": "10001",
        "country": "USA"
      },
      "rating": 4.5,
      "priceDetails": {
        "default": {
          "pricePerNight": 350.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-06-01",
            "endDate": "2024-08-31",
            "pricePerNight": 400.00
          },
          {
            "startDate": "2024-11-01",
            "endDate": "2024-11-30",
            "pricePerNight": 450.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 550.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": false,
      "numberOfRooms": 100,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": true,
        "businessCenter": false,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "The Grand Plaza Hotel offers luxury accommodations in the heart of New York City. Enjoy a rooftop pool, fitness center, and fine dining.",
      "bookingLink": "https://www.booking.com/hotel/us/grand-plaza.en-gb.html"
    },
    {
      "hotelName": "Sunset Beach Resort",
      "address": {
        "street": "456 Ocean Drive",
        "city": "Miami",
        "postalCode": "33139",
        "country": "USA"
      },
      "rating": 4.8,..................
      `

export default CheckBox;
