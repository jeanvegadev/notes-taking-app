"use client";
import styles from "./NewNoteButton.module.css";

export default function NewNoteButton() {
  return (
    <button className={styles.newNoteBtn}>
      <span className={styles.plusIcon}>+</span> New Note
    </button>
  );
}
