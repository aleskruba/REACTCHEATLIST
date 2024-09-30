// src/types.ts

export interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  export interface Street {
    number: string;
    name: string;
  }
  
  export interface Coordinates {
    latitude: string;
    longitude: string;
  }
  
  export interface Timezone {
    offset: string;
    description: string;
  }
  
  export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
  }
  
  export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  
  export interface Dob {
    date: string;
    age: string;
  }
  
  export interface Registered {
    date: string;
    age: string;
  }
  
  export interface Id {
    name: string;
    value: string;
  }
  
  export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
  }
  
  export interface FormData {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  }
  

  export interface Address {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  }
  
  export interface PriceDetails {
    default: {
      pricePerNight: number;
      currency: string;
    };
    seasonalRates: {
      startDate: string; // Use ISO date format
      endDate: string;   // Use ISO date format
      pricePerNight: number;
    }[];
    weekendRates: {
      pricePerNight: number;
    };
  }
  
  export interface Facilities {
    swimmingPool: boolean;
    fitnessCenter: boolean;
    restaurant: boolean;
    bar: boolean;
    spa: boolean;
    businessCenter: boolean;
    laundryService: boolean;
    roomService: boolean;
  }
  
  export interface Hotel {
    hotelName: string;
    address: Address;
    rating: number;
    priceDetails: PriceDetails;
    breakfastIncluded: boolean;
    airConditioning: boolean;
    freeWiFi: boolean;
    parkingAvailable: boolean;
    petFriendly: boolean;
    numberOfRooms: number;
    checkInTime: string; // Use 24-hour format or any desired format
    checkOutTime: string; // Use 24-hour format or any desired format
    cancellationPolicy: string;
    facilities: Facilities;
    hotelDescription: string;
    bookingLink: string;
  }
  