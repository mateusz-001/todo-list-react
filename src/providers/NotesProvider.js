import React, { useState } from 'react';
import { notes as notesData } from 'data/notes';
import { v4 as uuidv4 } from 'uuid';

export const NotesContext = React.createContext({
  notes: [],
  handleAddNote: () => {},
  deleteNote: () => {},
});

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(notesData);

  const handleAddNote = (values) => {
    const newNote = {
      uuid: uuidv4(),
      title: values.title,
      text: values.text,
      done: values.done,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (uuid) => {
    const filteredNotes = notes.filter((note) => note.uuid !== uuid);
    setNotes(filteredNotes);
  };

  const markDone = (uuid) => {
    const filteredNotes = notes.filter((note) => (note.done = true !== uuid));
    setNotes(filteredNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        deleteNote,
        handleAddNote,
        markDone,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
