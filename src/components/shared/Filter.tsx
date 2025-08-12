"use client";

import { FilterCheckbox } from "@/components/shared/FilterCheckbox";
import SliderWithMinMax from "@/components/ui/Slider";
import { useState } from "react";

function Filter() {
  return (
    <div className="w-1/5 flex-col justify-center ">
      <FilterCheckbox text="Можно собирать" value="1" />
      <FilterCheckbox text="Новинки" value="2" />
      <div className="w-full h-[1px] bg-gray-200 mt-5" />
      <div className="py-5">
        <p className="font-extrabold text-base mb-2">Цена от и до:</p>
        <div className="flex items-center gap-7">
          <input
            type="number"
            placeholder="от"
            min="0"
            className="w-[110px] h-[40px] rounded-xl pl-3  shadow border border-gray-200"
          />
          <input
            type="number"
            placeholder="до"
            max="1000"
            className="w-[110px] h-[40px] rounded-xl pl-3 appearance-none  shadow border border-gray-200"
          />
        </div>
        <SliderWithMinMax />
      </div>
    </div>
  );
}

export default Filter;
