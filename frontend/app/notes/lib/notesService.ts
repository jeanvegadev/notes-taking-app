export interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  categoryColor: string;
  createdAt: string;
  updatedAt: string;
}

const NOTES_STORAGE_KEY = "notes_app_notes";

export function getNotes(): Note[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(NOTES_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function generateNextId(): string {
  const notes = getNotes();
  const ids = notes
    .map((n) => parseInt(n.id))
    .filter((n) => !isNaN(n));

  if (ids.length === 0) {
    return "1";
  }

  const maxId = Math.max(...ids);
  return (maxId + 1).toString();
}

export function saveNote(note: Note): void {
  if (typeof window === "undefined") return;
  const notes = getNotes();
  const existingIndex = notes.findIndex((n) => n.id === note.id);

  if (existingIndex >= 0) {
    notes[existingIndex] = note;
  } else {
    notes.push(note);
  }

  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

export function deleteNote(noteId: string): void {
  if (typeof window === "undefined") return;
  const notes = getNotes();
  const filtered = notes.filter((n) => n.id !== noteId);
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(filtered));
}

export function getNoteById(noteId: string): Note | undefined {
  const notes = getNotes();
  return notes.find((n) => n.id === noteId);
}
