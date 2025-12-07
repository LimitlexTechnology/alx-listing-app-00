import Image from "next/image";
import { PropertyProps } from "@/interfaces";

export default function PropertyCard({ property }: { property: PropertyProps }) {
  const { name, image, address, rating, price, category } = property;
  return (
    <div className="border border-[#e9e9e9] rounded-xl overflow-hidden bg-white">
      <div className="relative w-full aspect-[16/10]">
        <Image src={image} alt={name} fill className="object-cover" />
        {property.discount && (
          <div className="absolute top-3 left-3 bg-[#161117] text-white text-xs px-3 py-1 rounded-full">
            {property.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#161117]">{name}</h3>
          <div className="flex items-center gap-1 text-[#161117]">
            <Image src="/assets/svg/icons/star.svg" alt="Rating" width={18} height={18} />
            <span className="text-sm font-medium">{rating.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-sm text-[#8C8C8C]">
          {address.city}, {address.state}, {address.country}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {category.slice(0, 3).map((c) => (
            <span key={c} className="text-xs px-2 py-1 rounded-full border border-[#e9e9e9] text-[#8C8C8C]">
              {c}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3 text-[#8C8C8C]">
            <div className="flex items-center gap-1">
              <Image src="/assets/svg/icons/bed.svg" alt="Beds" width={16} height={16} />
              <span className="text-sm">{property.offers.bed}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/svg/icons/bathtub.svg" alt="Baths" width={16} height={16} />
              <span className="text-sm">{property.offers.shower}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/svg/icons/people.svg" alt="Occupants" width={16} height={16} />
              <span className="text-sm">{property.offers.occupants}</span>
            </div>
          </div>
          <div className="text-[#161117] font-semibold">
            ${price}
            <span className="text-[#8C8C8C] font-normal text-sm"> / night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

