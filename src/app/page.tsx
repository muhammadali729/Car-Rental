import CarCard from './components/CarCard';


const cars = [
  {
    id: 1,
    title: 'Luxury Sedan',
    description: 'Experience premium comfort with our luxury sedans.',
    image: '/luxury-sedan.jpeg',
  },
  {
    id: 2,
    title: 'SUV',
    description: 'Perfect for family trips.',
    image: '/suv.jpeg',
  },
  {
    id: 3,
    title: 'Economy Hatchback',
    description: 'Affordable and efficient for city commutes.',
    image: '/economy-hatchback.jpeg',
  },

  {
    id: 4,
    title: 'Convertible',
    description: 'Feel the breeze with our stylish convertibles.',
    image: '/convertible.jpeg',
  },
  {
    id: 5,
    title: 'Electric Car',
    description: 'Eco-friendly and efficient for modern travelers.',
    image: '/electric-car.jpeg',
  },
];



export default function HomePage() {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          id={car.id}
          title={car.title}
          description={car.description}
          image={car.image}
        />
      ))}
    </div>
    
    
  );
}

