import React from "react";
import Image from "next/image";
import { CATEGORIES } from "@/constants";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-[#e9e9e9]">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-15 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/svg/ALX-LOGO.svg" alt="ALX" width={36} height={36} />
            <span className="font-semibold text-[18px]">ALX Listing</span>
          </div>
          <div className="flex items-center gap-3 flex-1 justify-end">
            <input
              type="text"
              placeholder="Search destinations"
              className="hidden md:block w-64 lg:w-96 px-4 py-2 rounded-full border border-[#e9e9e9]"
            />
            <button className="px-4 py-2 rounded-full border border-[#e9e9e9]">Sign in</button>
            <button className="px-4 py-2 rounded-full border border-[#161117] bg-[#161117] text-white">Sign up</button>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-6 min-w-max">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2 text-sm text-[#161117]">
                <Image
                  src={`/assets/svg/logos/${cat.file}`}
                  alt={cat.name}
                  width={24}
                  height={24}
                />
                <span className="whitespace-nowrap">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
