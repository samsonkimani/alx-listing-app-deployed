import Link from "next/link";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Image */}
      <Link href={`/property/${property.id}`}>
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/property/${property.id}`}>
          <h2 className="text-lg font-bold mb-1 hover:text-blue-600">
            {property.title}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-blue-600 font-semibold mb-3">${property.price}</p>
        <p className="text-gray-700 text-sm line-clamp-2">
          {property.description}
        </p>
      </div>
    </div>
  );
}
