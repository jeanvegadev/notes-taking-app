"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./NoteDetail.module.css";

interface NoteDetailProps {
  note?: {
    id: string;
    title: string;
    content: string;
    category?: string;
    createdAt?: string;
  };
  isNew?: boolean;
  selectedCategory?: { name: string; color: string };
  onAutoSave?: (data: { title: string; content: string; category: string }) => void;
  onClose?: () => void;
}

export default function NoteDetail({
  note,
  isNew = false,
  selectedCategory,
  onAutoSave,
  onClose,
}: NoteDetailProps) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-save with debouncing
  useEffect(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    autoSaveTimeoutRef.current = setTimeout(() => {
      if (onAutoSave) {
        onAutoSave({
          title,
          content,
          category: selectedCategory?.name || "General",
        });
      }
    }, 1000); // Auto-save after 1 second of inactivity

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [title, content, selectedCategory, onAutoSave]);

  const formatDateTime = (dateString?: string) => {
    if (!dateString) {
      const now = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthNames[now.getMonth()];
      const dateNum = now.getDate();
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "pm" : "am";
      return `${month} ${dateNum}, ${year} at ${hours}:${minutes}${ampm}`;
    }
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const dateNum = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "pm" : "am";
    return `${month} ${dateNum}, ${year} at ${hours}:${minutes}${ampm}`;
  };

  const categoryColor = selectedCategory?.color || "#f5d4c4";

  return (
    <div className={styles.noteDetailContainer}>
      <div
        className={styles.noteCard}
        style={{ backgroundColor: categoryColor, borderColor: categoryColor }}
      >
        {/* Last Edited Info */}
        <div className={styles.lastEdited}>
          Last Edited: {formatDateTime(note?.createdAt)}
        </div>

        {/* Title */}
        <input
          type="text"
          className={styles.title}
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content */}
        <textarea
          className={styles.content}
          placeholder="Note content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}
