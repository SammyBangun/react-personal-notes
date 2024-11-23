/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

function NotesList({ notes, deleteNote, toggleArchive }) {
  return (
    <div>
      <ActiveNotes
        notes={notes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
      <ArchivedNotes
        notes={notes}
        deleteNote={deleteNote}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default NotesList;
