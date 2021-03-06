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

  const toggleDone = (uuid) => {
    setNotes(
      notes.map((item) => {
        if (item.uuid == uuid) {
          return {
            ...item,
            done: !item.done,
          };
        } else {
          return item;
        }
      })
    );
  };

  const doneItems = notes.filter((item) => {
    return item.done === true;
  });

  const undoneItems = notes.filter((note) => {
    return note.done === false;
  });

  return (
    <NotesContext.Provider
      value={{
        notes,
        deleteNote,
        handleAddNote,
        toggleDone,
        doneItems,
        undoneItems,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
