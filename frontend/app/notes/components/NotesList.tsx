export default function NotesList({ notes }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow border"
        >
          <h3 className="font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600">{note.content}</p>
        </div>
      ))}
    </div>
  );
}
