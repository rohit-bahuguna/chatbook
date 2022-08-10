import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Menubar from "./components/Menubar";
import "./css/home.css";
import Header from "./components/Header";
import { getStorage, ref, uploadBytes  } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserAuth } from "./context/UserAuthContext";


const Home = () => {
  const {user , auth} = useUserAuth();
 
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021",
    },
  ]);
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  {
    /*this function is for adding new note*/
  }
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  {
    /*this function is for deleting notes in note app with a id*/
  }
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  
  return (
    <>

      <Header />
      <div id="main">
        <div className={`${darkMode && "dark-mode"}`}>
          <div className="container">
            <Menubar handleToggleDarkMode={setDarkMode} />
            <div>{user.displayName}</div>
            <Search handleSearch={setSearchNote} />

            <NotesList
              notes={notes.filter((note) =>
                note.text.toLowerCase().includes(searchNote)
              )}
              handleAddNote={addNote}
              handleDelete={deletingNote}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
