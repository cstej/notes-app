import React from "react";
import AddNode from "./AddNode";
import Note from "./Note";
const Noteslist = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handlerDeleteAllNote,
}) => {
  return (
    <div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNode handleAddNote={handleAddNote} />
      </div>
      <button
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        className="save"
        onClick={() => handlerDeleteAllNote()}
      >
        Delete All note
      </button>
    </div>
  );
};

export default Noteslist;
