import { getStorage, ref, uploadString , uploadBytesResumable} from "firebase/storage";
import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

{
  /*this component is for adding new note in our notes application*/
}

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const storage = getStorage();
  const charLimit = 300;


 

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      const storageRef = ref(storage, "notes" );
const uploadTask = uploadBytesResumable(storageRef, noteText);

uploadTask();

      setNoteText("");
    }
  };
//console.log("auth" , auth.lastNotifiedUid);
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a new note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
