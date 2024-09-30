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
      "rating": 4.8,
      "priceDetails": {
        "default": {
          "pricePerNight": 220.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-05-01",
            "endDate": "2024-09-30",
            "pricePerNight": 250.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 240.00
        }
      },
      "breakfastIncluded": false,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": true,
      "numberOfRooms": 80,
      "checkInTime": "16:00",
      "checkOutTime": "12:00",
      "cancellationPolicy": "Free cancellation up to 24 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": true,
        "businessCenter": false,
        "laundryService": true,
        "roomService": false
      },
      "hotelDescription": "Enjoy a relaxing stay at Sunset Beach Resort with beautiful ocean views, a full-service spa, and pet-friendly accommodations.",
      "bookingLink": "https://www.booking.com/hotel/us/sunset-beach-resort.en-gb.html"
    },
    {
      "hotelName": "Mountain Lodge",
      "address": {
        "street": "789 Alpine Road",
        "city": "Aspen",
        "postalCode": "81611",
        "country": "USA"
      },
      "rating": 4.3,
      "priceDetails": {
        "default": {
          "pricePerNight": 180.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-12-01",
            "endDate": "2024-02-28",
            "pricePerNight": 230.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 200.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": false,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": false,
      "numberOfRooms": 50,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 72 hours before arrival.",
      "facilities": {
        "swimmingPool": false,
        "fitnessCenter": true,
        "restaurant": false,
        "bar": false,
        "spa": true,
        "businessCenter": false,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "Mountain Lodge offers cozy accommodations with access to skiing, hiking, and a relaxing spa experience.",
      "bookingLink": "https://www.booking.com/hotel/us/mountain-lodge.en-gb.html"
    },
    {
      "hotelName": "City Lights Hotel",
      "address": {
        "street": "101 Urban Square",
        "city": "San Francisco",
        "postalCode": "94105",
        "country": "USA"
      },
      "rating": 4.6,
      "priceDetails": {
        "default": {
          "pricePerNight": 200.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-04-01",
            "endDate": "2024-10-31",
            "pricePerNight": 220.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 210.00
        }
      },
      "breakfastIncluded": false,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": false,
      "petFriendly": false,
      "numberOfRooms": 120,
      "checkInTime": "14:00",
      "checkOutTime": "12:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": false,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": false,
        "businessCenter": false,
        "laundryService": false,
        "roomService": true
      },
      "hotelDescription": "City Lights Hotel features modern amenities and a prime location in San Francisco, ideal for both business and leisure travelers.",
      "bookingLink": "https://www.booking.com/hotel/us/city-lights.en-gb.html"
    },
    {
      "hotelName": "Seaside Inn",
      "address": {
        "street": "202 Beachfront Blvd",
        "city": "San Diego",
        "postalCode": "92109",
        "country": "USA"
      },
      "rating": 4.4,
      "priceDetails": {
        "default": {
          "pricePerNight": 170.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-06-01",
            "endDate": "2024-08-31",
            "pricePerNight": 200.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 190.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": true,
      "numberOfRooms": 60,
      "checkInTime": "16:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 24 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": false,
        "restaurant": true,
        "bar": false,
        "spa": false,
        "businessCenter": false,
        "laundryService": true,
        "roomService": false
      },
      "hotelDescription": "Seaside Inn offers a relaxing beachfront getaway with easy access to local attractions and pet-friendly accommodations.",
      "bookingLink": "https://www.booking.com/hotel/us/seaside-inn.en-gb.html"
    },
    {
      "hotelName": "Country Inn & Suites",
      "address": {
        "street": "303 Country Lane",
        "city": "Nashville",
        "postalCode": "37209",
        "country": "USA"
      },
      "rating": 4.1,
      "priceDetails": {
        "default": {
          "pricePerNight": 130.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-05-01",
            "endDate": "2024-08-31",
            "pricePerNight": 150.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 140.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": true,
      "numberOfRooms": 90,
      "checkInTime": "15:00",
      "checkOutTime": "12:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": false,
        "bar": false,
        "spa": false,
        "businessCenter": false,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "Country Inn & Suites provides a comfortable stay with family-friendly amenities and easy access to Nashville’s attractions.",
      "bookingLink": "https://www.booking.com/hotel/us/country-inn-suites.en-gb.html"
    },
    {
      "hotelName": "Skyline Hotel",
      "address": {
        "street": "404 Skyscraper Rd",
        "city": "Chicago",
        "postalCode": "60614",
        "country": "USA"
      },
      "rating": 4.7,
      "priceDetails": {
        "default": {
          "pricePerNight": 190.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-05-01",
            "endDate": "2024-09-30",
            "pricePerNight": 210.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 200.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": false,
      "petFriendly": false,
      "numberOfRooms": 110,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 24 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": true,
        "businessCenter": false,
        "laundryService": false,
        "roomService": true
      },
      "hotelDescription": "Skyline Hotel offers luxurious amenities and stunning city views, perfect for both business and leisure travelers.",
      "bookingLink": "https://www.booking.com/hotel/us/skyline.en-gb.html"
    },
    {
      "hotelName": "Lakeview Suites",
      "address": {
        "street": "505 Lake Road",
        "city": "Seattle",
        "postalCode": "98109",
        "country": "USA"
      },
      "rating": 4.2,
      "priceDetails": {
        "default": {
          "pricePerNight": 160.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-06-01",
            "endDate": "2024-09-30",
            "pricePerNight": 180.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 170.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": true,
      "numberOfRooms": 75,
      "checkInTime": "15:00",
      "checkOutTime": "12:00",
      "cancellationPolicy": "Free cancellation up to 24 hours before arrival.",
      "facilities": {
        "swimmingPool": false,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": false,
        "businessCenter": false,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "Lakeview Suites offers comfortable accommodations with lake views, modern amenities, and a welcoming atmosphere.",
      "bookingLink": "https://www.booking.com/hotel/us/lakeview-suites.en-gb.html"
    },
    {
      "hotelName": "Heritage House",
      "address": {
        "street": "606 Heritage Street",
        "city": "Charleston",
        "postalCode": "29401",
        "country": "USA"
      },
      "rating": 4.4,
      "priceDetails": {
        "default": {
          "pricePerNight": 140.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-03-01",
            "endDate": "2024-11-30",
            "pricePerNight": 160.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 150.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": false,
      "numberOfRooms": 40,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": false,
        "fitnessCenter": false,
        "restaurant": true,
        "bar": true,
        "spa": false,
        "businessCenter": false,
        "laundryService": false,
        "roomService": false
      },
      "hotelDescription": "Heritage House provides a charming stay with elegant rooms, a restaurant, and a cozy atmosphere in historic Charleston.",
      "bookingLink": "https://www.booking.com/hotel/us/heritage-house.en-gb.html"
    },
    {
      "hotelName": "Urban Retreat",
      "address": {
        "street": "707 City Center",
        "city": "Dallas",
        "postalCode": "75201",
        "country": "USA"
      },
      "rating": 4.6,
      "priceDetails": {
        "default": {
          "pricePerNight": 170.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-06-01",
            "endDate": "2024-08-31",
            "pricePerNight": 200.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 190.00
        }
      },
      "breakfastIncluded": false,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": false,
      "petFriendly": true,
      "numberOfRooms": 95,
      "checkInTime": "14:00",
      "checkOutTime": "12:00",
      "cancellationPolicy": "Free cancellation up to 24 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": true,
        "businessCenter": true,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "Urban Retreat offers contemporary amenities and luxurious accommodations in downtown Dallas, with easy access to local attractions.",
      "bookingLink": "https://www.booking.com/hotel/us/urban-retreat.en-gb.html"
    },
    {
      "hotelName": "Riverside Inn",
      "address": {
        "street": "808 River Road",
        "city": "Cincinnati",
        "postalCode": "45202",
        "country": "USA"
      },
      "rating": 4.0,
      "priceDetails": {
        "default": {
          "pricePerNight": 120.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-07-01",
            "endDate": "2024-08-31",
            "pricePerNight": 140.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 130.00
        }
      },
      "breakfastIncluded": false,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": true,
      "petFriendly": true,
      "numberOfRooms": 70,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": false,
        "fitnessCenter": true,
        "restaurant": false,
        "bar": false,
        "spa": false,
        "businessCenter": false,
        "laundryService": true,
        "roomService": false
      },
      "hotelDescription": "Riverside Inn offers a comfortable stay with easy access to the riverfront and pet-friendly accommodations.",
      "bookingLink": "https://www.booking.com/hotel/us/riverside-inn.en-gb.html"
    },
    {
      "hotelName": "Historic Hotel",
      "address": {
        "street": "909 Heritage Blvd",
        "city": "Philadelphia",
        "postalCode": "19103",
        "country": "USA"
      },
      "rating": 4.5,
      "priceDetails": {
        "default": {
          "pricePerNight": 190.00,
          "currency": "USD"
        },
        "seasonalRates": [
          {
            "startDate": "2024-06-01",
            "endDate": "2024-09-30",
            "pricePerNight": 210.00
          }
        ],
        "weekendRates": {
          "pricePerNight": 200.00
        }
      },
      "breakfastIncluded": true,
      "airConditioning": true,
      "freeWiFi": true,
      "parkingAvailable": false,
      "petFriendly": false,
      "numberOfRooms": 85,
      "checkInTime": "15:00",
      "checkOutTime": "11:00",
      "cancellationPolicy": "Free cancellation up to 48 hours before arrival.",
      "facilities": {
        "swimmingPool": true,
        "fitnessCenter": true,
        "restaurant": true,
        "bar": true,
        "spa": false,
        "businessCenter": true,
        "laundryService": true,
        "roomService": true
      },
      "hotelDescription": "Historic Hotel combines classic charm with modern amenities, offering a prime location in Philadelphia and excellent service.",
      "bookingLink": "https://www.booking.com/hotel/us/historic.en-gb.html"
    }
  ]
  