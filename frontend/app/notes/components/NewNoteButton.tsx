"use client";
import { useRouter } from "next/navigation";
import styles from "./NewNoteButton.module.css";

export default function NewNoteButton() {
  const router = useRouter();

  return (
    <button
      className={styles.newNoteBtn}
      onClick={() => router.push("/notes/newnote")}
    >
      <span className={styles.plusIcon}>+</span> New Note
    </button>
  );
}
