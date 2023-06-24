import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "6491e59c53ecbc768459bf13",
          "user": "6485c563763710e26c89e80b",
          "title": "My Title",
          "description": "Wake up early",
          "tag": "personal",
          "date": "2023-06-20T17:45:00.266Z",
          "__v": 0
        },
        {
          "_id": "6491e5af53ecbc768459bf15",
          "user": "6485c563763710e26c89e80b",
          "title": "My Title11",
          "description": "Wake up early ok",
          "tag": "personal txt",
          "date": "2023-06-20T17:45:19.787Z",
          "__v": 0
        }
      ];
      const [notes, setNotes] = useState(notesInitial);

      // Add a Note
      const addNote = (title, description, tag)=> {
        // TODO: API Call
        console.log("NoteState >>> addNote >> Adding Note.");
        const note =  {
          "_id": "6491e5af53ecbc768459bf15",
          "user": "6485c563763710e26c89e80b",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-06-20T17:45:19.787Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
      }

      // Delete a Note
      const deleteNote = (id)=> {
        console.log("Deleting Note WIth id: " + id);
        const newNotes = notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
      }

      // Edit a Note
      const editNote = ()=> {

      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;