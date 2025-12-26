"use client";

import Link from "next/link";

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  categoryColor: string;
  createdAt: string;
  updatedAt: string;
}

interface NotesListProps {
  notes: Note[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "yesterday";
  } else {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  }
}

function truncateContent(content: string, maxLength: number = 150) {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
}

export default function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) {
    return null;
  }

  return (
  <div className="grid grid-cols-3 gap-6 w-full">
    {notes.map((note) => (
      <div
        key={note.id}
        className="p-4 rounded-xl border-2"
        style={{
          backgroundColor: note.categoryColor,
          borderColor: "#FAF1E3",
        }}
      >
        <Link href={`/notes/${note.id}`} className="block h-full">
          {/* Date and Category */}
          <div className="flex justify-between items-center mb-4 text-sm font-bold">
            <span>{formatDate(note.updatedAt)}</span>
            <span>{note.category}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4">
            {note.title || "Untitled"}
          </h3>

          {/* Content */}
          <p className="text-sm">
            {truncateContent(note.content || "No content...")}
          </p>
        </Link>
      </div>
    ))}
  </div>
);
}
