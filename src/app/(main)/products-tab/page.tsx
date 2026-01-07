"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductsTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  console.log(activeTab);
  interface Products {
    id: number;
    name: string;
    category: string;
    price: string;
  }

  const products: Products[] = [
    { id: 1, name: "MacBook Pro", category: "ল্যাপটপ", price: "২,২২,০০০" },
    { id: 2, name: "Dell XPS 13", category: "ল্যাপটপ", price: "৫০,৫৯৯" },
    { id: 3, name: "iPhone 15", category: "মোবাইল", price: "৯৬,৯৯৯" },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      category: "মোবাইল",
      price: "১,২০,৫৯৯",
    },
    { id: 5, name: "iPad Pro", category: "ট্যাব", price: "১,৫৮,২৯৯" },
    { id: 6, name: "Galaxy Tab S9", category: "ট্যাব", price: "৬০,৭৯৯" },
  ];

  const tabItem = ["সব", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeTab === 0
      ? products
      : products.filter((p) => p.category === tabItem[activeTab]);
  console.log(filteredProducts);

  return (
    <div className="flex justify-center bg-white text-black min-h-screen">
      <div className="flex flex-col gap-7 items-center mt-20">
        <h1 className="text-4xl font-bold">-আমাদের কাছে যা পাচ্ছেন-</h1>
        {/* Tab Item */}
        <div className="flex gap-3">
          {tabItem.map((tab, index) => (
            <button
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? "bg-[#0F172A] text-white"
                  : "bg-white hover:bg-gray-50 text-black"
              } px-4 py-2 font-medium rounded-full shadow-sm shadow-gray-300 border-px border-gray-200 cursor-pointer transition duration-400 ease-in-out`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Card Grids */}
        <div className="grid grid-cols-3 gap-7">
          {filteredProducts.map(({ id, name, category, price }) => (
            <motion.div
              initial={{ opacity: 0, skewY: 10 }}
              animate={{ opacity: 1, skewY: 0 }}
              transition={{ duration: 0.7 }}
              key={id}
              className="space-y-3 border border-gray-200 shadow-sm shadow-gray-300 p-5 rounded-lg w-66 hover:shadow-md hover:transition hover:duration-200"
            >
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-gray-500"> ক্যাটাগরি: {category}</p>
              <p className="font-semibold">৳{price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTab;
