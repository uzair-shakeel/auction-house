import { X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="TM Auction House Logo"
              className="rounded-full "
            />
            {/* Mobile brand text */}
            <span className="text-[#C4A574] font-medium text-sm sm:hidden">
              TM HOUSE
            </span>
          </div>
          <button
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
