"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NoteDetail from "../components/NoteDetail";
import CategoryDropdown from "../components/CategoryDropdown";
import { CATEGORIES } from "../components/CategoryDropdown";
import { saveNote } from "../lib/notesService";
import styles from "./newnote.module.css";

export default function NewNotePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [noteData, setNoteData] = useState({ title: "", content: "" });
  const [noteId, setNoteId] = useState<string>("");

  // Generate note ID once on component mount
  useEffect(() => {
    setNoteId(`note_${Date.now()}`);
  }, []);

  const handleAutoSave = (data: { title: string; content: string; category: string }) => {
    setNoteData(data);
    
    // Don't save empty notes
    if (!data.title.trim() && !data.content.trim()) {
      return;
    }
    
    // Save to localStorage with the same note ID
    if (noteId) {
      saveNote({
        id: noteId,
        title: data.title,
        content: data.content,
        category: selectedCategory.name,
        categoryColor: selectedCategory.color,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      console.log("Auto-saving:", { ...data, category: selectedCategory });
    }
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
