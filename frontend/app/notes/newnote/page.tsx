"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NoteDetail from "../components/NoteDetail";
import CategoryDropdown from "../components/CategoryDropdown";
import { CATEGORIES } from "../components/CategoryDropdown";
import styles from "./newnote.module.css";

export default function NewNotePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  const handleAutoSave = (data) => {
    // Send to API
    console.log("Auto-saving:", { ...data, category: selectedCategory });
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header with Category Dropdown and Close Button */}
      <div className={styles.header}>
        <div className={styles.categoryDropdownContainer}>
          <CategoryDropdown
            selected={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        <button
          className={styles.closeBtn}
          onClick={handleClose}
        >
          ✕
        </button>
      </div>

      {/* Note Detail Content */}
      <div className={styles.contentWrapper}>
        <NoteDetail
          isNew
          selectedCategory={selectedCategory}
          onAutoSave={handleAutoSave}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}
