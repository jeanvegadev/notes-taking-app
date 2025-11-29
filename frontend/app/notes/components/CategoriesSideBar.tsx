"use client";

import "../../globals.css";
import "../../../styles/notes.css";
import { useState } from "react";
import styles from "./CategoriesSideBar.module.css";

export default function CategoriesSidebar() {
  const [active, setActive] = useState("All");

  const categories = [
    { name: "Random Thoughts", count: 8, color: "#F4A261" },
    { name: "School", count: 12, color: "#2A9D8F" },
    { name: "Personal", count: 4, color: "#E76F51" },
    { name: "Drama", count: 2, color: "#9B5DE5" },
  ];

  return (
    <div className="w-[250px] flex-shrink-0 p-6">

      <div className="mt-[100px] mr-[10px] ml-[15px]">
        <h3
          className="filter-title cursor-pointer"
          onClick={() => console.log("Clicked!")}
        >
          All Categories
        </h3>

        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setActive(c.name)}
            className={`${styles.categoryBtn} flex items-center justify-between w-full py-2 px-2 mb-1
              ${active === c.name ? "font-bold" : "text-gray-700"}
            `}
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-3 filter-option">
              <span
                className="mx-[3px] w-[8px] h-[8px] rounded-full"
                style={{ backgroundColor: c.color }}
              ></span>

              <span className="mx-[3px]">{c.name}</span>
            </div>

            {/* RIGHT — COUNT */}
            <span className="text-sm">{c.count}</span>
          </button>
        ))}
      </div>
      
    </div>
  );
}
