"use client";

import { useState } from "react";
import styles from "./CategoryDropdown.module.css";

interface Category {
  id: string;
  name: string;
  color: string;
}

const CATEGORIES: Category[] = [
  { id: "random", name: "Random Thoughts", color: "#d89b7a" },
  { id: "personal", name: "Personal", color: "#7eb3b0" },
  { id: "school", name: "School", color: "#f0d89c" },
  { id: "drama", name: "Drama", color: "#a8c89c" },
];

interface CategoryDropdownProps {
  onCategorySelect?: (category: Category) => void;
  selected?: Category;
}

export default function CategoryDropdown({
  onCategorySelect,
  selected = CATEGORIES[0],
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(selected);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsOpen(false);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selectedCategory}>
          <span
            className={styles.categoryDot}
            style={{ backgroundColor: selectedCategory.color }}
          ></span>
          <span className={styles.categoryName}>{selectedCategory.name}</span>
        </div>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={styles.menuItem}
              onClick={() => handleSelectCategory(category)}
            >
              <span
                className={styles.categoryDot}
                style={{ backgroundColor: category.color }}
              ></span>
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export { CATEGORIES };
