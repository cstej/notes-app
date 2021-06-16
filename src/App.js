import React, { useState, useEffect } from "react";
import Noteslist from "./components/Noteslist";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  // Notes Local Storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // UseState hook
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // DarkMode Local Storage
  useEffect(() => {
    const savedDarkMode = JSON.parse(
      localStorage.getItem("darkModeToggle-data")
    );
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkModeToggle-data", JSON.stringify(darkMode));
  }, [darkMode]);

  // Adding Note
  const addNode = (text) => {
    const date = new Date().toLocaleDateString();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // Deleteing a Note
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  // Delete All Note
  const deleteAllNote = () => {
    setNotes([]);
  };
  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <Noteslist
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNode}
          handleDeleteNote={deleteNote}
          handlerDeleteAllNote={deleteAllNote}
        />
      </div>
    </div>
  );
};

export default App;
