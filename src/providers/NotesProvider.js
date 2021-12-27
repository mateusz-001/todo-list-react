import React, { useState } from 'react';
import { notes as notesData } from 'data/notes';

export const NotesContext = React.createContext({
  notes: [],
  handleAddNote: () => {},
  deleteNote: () => {},
});

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(notesData);

  const deleteNote = (title) => {
    const filteredNotes = notes.filter((note) => note.title !== title);
    setNotes(filteredNotes);
  };

  const handleAddNote = (values) => {
    const newNote = {
      title: values.title,
      text: values.text,
    };
    setNotes([newNote, ...notes]);
  };
  return (
    <NotesContext.Provider
      value={{
        notes,
        deleteNote,
        handleAddNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
