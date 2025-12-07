// interfaces/index.ts

// Represents props for a Card component
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id: number;
  name: string;
  address: Address;
  description: string;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface Amenity {
  label: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  date: string;
  tripType: string;
  comment: string;
}
