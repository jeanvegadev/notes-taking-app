"use client";

import "../../globals.css";
import "../../../styles/notes.css";
import { useState } from "react";
import styles from "./CategoriesSideBar.module.css";
import { Note } from "../lib/notesService";
import { CATEGORIES } from "../lib/categories";

interface CategoriesSidebarProps {
  notes: Note[];
}

export default function CategoriesSidebar({ notes }: CategoriesSidebarProps) {
  const [active, setActive] = useState("All");

  return (
    <div className="w-[250px] flex-shrink-0 p-6">

      <div className="mt-[100px] mr-[10px] ml-[15px]">
        <h3
          className="filter-title cursor-pointer"
          onClick={() => console.log("Clicked!")}
        >
          All Categories
        </h3>

        {CATEGORIES.map((c) => {
          const count = notes.filter((n) => n.category === c.name).length;

          return (
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
              <span className="text-sm">{count}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
