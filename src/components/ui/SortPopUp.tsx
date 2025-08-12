"use client";
import { ArrowUpDown, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function SortPopUp() {
  const options: string[] = [
    "рейтингу",
    "возрастанию цены",
    "по убыванию цены",
  ];
  const [selectedOption, setSelectedOption] = useState<string>("рейтингу");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOption = (option: string) => {
    setIsOpen(!isOpen);
    setSelectedOption(option);
  };
  return (
    <div className="flex items-center py-1 px-2 bg-[#FAFAFA] rounded-xl shadow">
      <ArrowUpDown className="mr-1" />
      <span>Сортировка: </span>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 p-2 text-[#fe5f00]"
        >
          {selectedOption}
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full mt-1 z-10">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleClickOption(option)}
                className="p-2 hover:text-[#fe5f00] cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortPopUp;
