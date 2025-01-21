export default function NoteItem({id, title, setTitle, content, setContent, setSelectedNote, handleDelete}) {
    const handleNoteClick = () => {
        setSelectedNote({id, title, content});
        setTitle(title);
        setContent(content);
    }

    return (
        <div
            key={id}
            onClick={handleNoteClick}
            className="flex flex-col font-semibold py-4 px-4 border border-gray-400 rounded shadow cursor-pointer"
            >
            <div className="flex justify-end">
                <button onClick={(event) => handleDelete(event, id)}>
                    <i className="ri-close-line bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded shadow"></i>
                </button>  
            </div>
            <p className="font-semibold text-base">{title}</p>
            <p className="font-normal text-sm">{content}</p>
        </div>
    );
}