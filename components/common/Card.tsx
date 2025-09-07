import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded shadow p-4">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded" />
    <h2 className="mt-2 text-lg font-bold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
