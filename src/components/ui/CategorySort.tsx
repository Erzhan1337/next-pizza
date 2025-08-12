'use client';
import { useState } from "react";

function CategorySort() {
  const categories = [
    "Пиццы",
    "Комбо",
    "Напитки",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Десерты",
  ];
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className="w-[50vw] flex justify-between items-center p-1 rounded-xl bg-[#FAFAFA] shadow">
      {categories.map((category, index) => (
        <button
          onClick={() => setActiveCategory(index)}
          className={`p-2 cursor-pointer ${activeCategory === index ? "bg-white text-[#FE5F00] rounded-xl shadow-xl" : ""} transition-all duration-500`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySort;
