'use client';  // Mark the component as a Client Component

import Link from 'next/link';
import { useParams } from 'next/navigation';  // Use useParams instead of useRouter in Next.js 14+

const carData = [
  {
    id: 1,
    title: 'Luxury Sedan',
    description: 'Experience premium comfort with our luxury sedans.',
    image: '/luxury-sedan.jpeg',
    price: 200,
    transmission: 'Automatic',
    maxSpeed: '240 km/h',
    average: '12 km/l',
    modelYear: 2022,
  },
  {
    id: 2,
    title: 'SUV',
    description: 'Perfect for family trips.',
    image: '/suv.jpeg',
    price: 250,
    transmission: 'Manual',
    maxSpeed: '200 km/h',
    average: '10 km/l',
    modelYear: 2021,
  },
  {
    id: 3,
    title: 'Economy Hatchback',
    description: 'Affordable and efficient for city commutes.',
    image: '/economy-hatchback.jpeg',
    price: 280,
    transmission: 'Automatic',
    maxSpeed: '180 km/h',
    average: '15 km/l',
    modelYear: 2023,
  },
  {
    id: 4,
    title: 'Convertible',
    description: 'Feel the breeze with our stylish convertibles.',
    image: '/convertible.jpeg',
    price: 320,
    transmission: 'Automatic',
    maxSpeed: '220 km/h',
    average: '13 km/l',
    modelYear: 2020,
  },
  {
    id: 5,
    title: 'Electric Car',
    description: 'Eco-friendly and efficient for modern travelers.',
    image: '/electric-car.jpeg',
    price: 430,
    transmission: 'Automatic',
    maxSpeed: '160 km/h',
    average: 'N/A (Electric)',
    modelYear: 2024,
  },
];

const CarDetailPage = () => {
  const { id } = useParams();  // Use useParams to get the car ID from the URL

  const car = carData.find((car) => car.id === Number(id));  // Find the car by ID

  if (!car) {
    return <div>Car not found</div>;  // Display message if car not found
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="car-detail-card max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Updated image styles */}
        <img 
          className="car-detail-image w-full h-auto object-contain rounded-lg mb-4" 
          src={car.image} 
          alt={car.title} 
          style={{ height: '300px', width: '100%' }} // Fixed dimensions with responsiveness
        />
        <h2 className="car-detail-title text-3xl font-bold mb-2">{car.title}</h2>
        <p className="car-detail-description text-lg text-gray-700 mb-4">{car.description}</p>
        
        {/* Display additional details */}
        <ul className="car-specs text-gray-600 mb-4">
          <li><strong>Transmission:</strong> {car.transmission}</li>
          <li><strong>Maximum Speed:</strong> {car.maxSpeed}</li>
          <li><strong>Average:</strong> {car.average}</li>
          <li><strong>Model Year:</strong> {car.modelYear}</li>
        </ul>

        {/* Display the price */}
        <p className="car-detail-price text-xl font-semibold text-gray-800 mb-6">
          Price: ${car.price} per day
        </p>

        {/* Rent Now button */}
        <Link 
          href={`/payment/${car.id}`}  // Navigate to the payment page with car ID
          className="rent-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarDetailPage;
