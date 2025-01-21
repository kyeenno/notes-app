export default function NoteForm({title, setTitle, content, setContent, handleAdd, selectedNote, handleUpdate, handleCancel}) {

    return (
        <form
            onSubmit={(event) => (selectedNote ? handleUpdate(event) : handleAdd(event))}
            className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow w-1/4 h-screen"
            >
            <input 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Title"
                className="border border-gray-400 rounded shadow py-2 px-4"
                required
                />
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Content" rows={10} className="border border-gray-400 rounded shadow py-2 px-4"
                required
                />

            {selectedNote ? (
                <div>
                    <button type="submit">
                        <i className="ri-check-line bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"></i>
                    </button>
                    <button onClick={handleCancel}>
                        <i className="ri-arrow-go-back-line bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"></i>
                    </button> 
                </div>
            ) : (
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Add Note</button>            
            )}
      </form>
    );
}