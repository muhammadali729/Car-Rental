// src/components/CarCard.tsx

import Link from 'next/link';

interface CarCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function CarCard({ id, title, description, image }: CarCardProps) {
  return (
    <div className="car-card">
      <img
        className="car-card-image"
        src={image}
        alt={title}
      />
      <div className="car-card-content">
        <h2 className="car-card-title">{title}</h2>
        <p className="car-card-description">{description}</p>
        <Link href={`/cars/${id}`} className="car-card-link">
          View Details
        </Link>
      </div>
    </div>
  );
}
