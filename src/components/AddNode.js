import React, { useState } from "react";

const AddNode = ({ handleAddNote }) => {
  const [nodeText, setNodeText] = useState("");

  const handleTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNodeText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (nodeText.trim().length > 0) {
      handleAddNote(nodeText);
      setNodeText("");
    }
  };
  const characterLimit = 400;
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={nodeText}
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - nodeText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          {" "}
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNode;
