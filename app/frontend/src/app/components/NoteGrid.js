import NoteItem from './NoteItem';

export default function NoteGrid({notes, setSelectedNote, setTitle, setContent, handleDelete}) {
    return (
        <div className="grid grid-rows-[repeat(auto-fill,minmax(15rem, 1fr))] auto-cols-[minmax(15rem,auto)] h-screen overflow-auto gap-5 p-5">
        {notes.map((note) => (
            <NoteItem
                setSelectedNote={setSelectedNote}
                setTitle={setTitle}
                setContent={setContent}
                handleDelete={handleDelete}
                key={note.id}
                id={note.id}
                title={note.title}
                content={note.content}
            />
        ))}
        </div>
    );
}