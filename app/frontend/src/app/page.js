'use client';
import 'remixicon/fonts/remixicon.css';
import NoteForm from './components/NoteForm';
import NoteGrid from './components/NoteGrid';
import { useEffect, useState } from 'react';

export default function Home() {
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  // Add note
  const addNote = async () => {
    try {
      const response = await fetch("https://notes-app-xi-sepia.vercel.app/notes", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
      });

      const newNote = await response.json();

      setNotes([...notes, newNote]);
      setTitle("");
      setContent("");

    } catch (e) {
        console.log(e);
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();
    addNote();
}

  // Update note
  const handleUpdate = (event) => {
    event.preventDefault();

    if (!selectedNote) return;

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updatedNotes = notes.map((note) => (note.id === selectedNote.id ? updatedNote : note));

    setNotes(updatedNotes);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  // Cancel update
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  // Delete note
  const handleDelete = async (event, noteId) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent element
    try {
      await fetch(`https://notes-app-xi-sepia.vercel.app/notes${noteId}`, {
        method: "DELETE",
      });

      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("https://notes-app-xi-sepia.vercel.app/notes");
        const notes = await response.json();
        setNotes(notes);
      } catch (e) {
        console.log(e);
      }
    };

    fetchNotes();
  }, []); // <-- Empty dependency array ([]) means this effect will only run once

  return (
    <div className='flex'>
      <NoteForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addNote={addNote}
        selectedNote={selectedNote}
        handleUpdate={handleUpdate}
        handleCancel={handleCancel}
        handleAdd={handleAdd}
        />
      <NoteGrid
        notes={notes}
        setSelectedNote={setSelectedNote}
        setTitle={setTitle}
        setContent={setContent}
        handleDelete={handleDelete}
        className='flex-grow' /* NoteGrid takes up the remaining space after NoteForm */
        /> 
    </div>
  );
}
