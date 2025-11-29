import CategoriesSidebar from "./components/CategoriesSideBar";
import NotesList from "./components/NotesList";
import EmptyState from "./components/EmptyState";
import NewNoteButton from "./components/NewNoteButton";

export default async function NotesPage() {
  // Fetch notes from Django API
  // const res = await fetch("http://127.0.0.1:8000/api/notes/", {
  //   cache: "no-store",
  // });

  // const notes = await res.json();
  const notes: any[] = [];

  return (
    
    <div className="flex h-screen bg-[#FAF1E3]">

      {/* LEFT SIDEBAR */}
      <CategoriesSidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 relative p-6">
        {/* TOP RIGHT BUTTON */}
        <div className="absolute right-[9px] top-[9px]">
          <NewNoteButton />
        </div>

        {/* NOTES OR EMPTY STATE */}
        {notes.length === 0 ? (
          <EmptyState />
        ) : (
          <NotesList notes={notes} />
        )}
      </div>
    </div>
  );
}
