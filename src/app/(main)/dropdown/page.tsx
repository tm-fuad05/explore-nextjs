"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // মেনুর বাইরে ক্লিক করলে বন্ধ করার লজিক
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center pt-20 bg-white min-h-screen">
      <div className="relative inline-block text-left" ref={dropdownRef}>
        {/* ড্রপডাউন বাটন */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          My Account
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* ড্রপডাউন মেনু কন্টেন্ট */}
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden transition-all duration-200 origin-top-right ${
            isOpen
              ? "scale-100 opacity-100 visible"
              : "scale-95 opacity-0 invisible"
          }`}
        >
          <div className="py-1">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <User size={16} /> Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings size={16} /> Settings
            </a>
            <hr className="my-1 border-gray-200" />
            <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
