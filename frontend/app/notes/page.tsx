"use client";

import { useEffect, useState } from "react";
import CategoriesSidebar from "./components/CategoriesSideBar";
import NotesList from "./components/NotesList";
import EmptyState from "./components/EmptyState";
import NewNoteButton from "./components/NewNoteButton";
import { getNotes } from "./lib/notesService";

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  categoryColor: string;
  createdAt: string;
  updatedAt: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    // Load notes from localStorage
    const loadedNotes = getNotes();
    setNotes(loadedNotes);
  }, []);

  return (
    <div className="flex h-screen bg-[#FAF1E3]">
      {/* LEFT SIDEBAR */}
      <CategoriesSidebar />

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col bg-[#FAF1E3]">
        {/* TOP HEADER - New Note Button */}
        <div className="flex justify-end items-center p-6 pb-4">
          <NewNoteButton />
        </div>

        {/* NOTES OR EMPTY STATE */}
          {notes.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="flex-1 flex overflow-y-auto p-6 m-6">
            <NotesList notes={notes} />
            </div>
          )}
        </div>
      </div>
  );
}
