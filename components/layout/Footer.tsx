import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e9e9e9]">
      <div className="max-w-[1600px] m-auto px-5 lg:px-10 xl:px-15 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8C8C8C] text-sm">
        <p>© {new Date().getFullYear()} ALX Listing. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#161117]">Privacy</a>
          <a href="#" className="hover:text-[#161117]">Terms</a>
          <a href="#" className="hover:text-[#161117]">Support</a>
        </div>
      </div>
    </footer>
  );
}
