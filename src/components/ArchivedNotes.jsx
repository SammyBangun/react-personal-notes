/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NotesCard from "./NotesCard";

function ArchivedNotes({ notes, deleteNote, toggleArchive }) {
  const archivedNotes = notes.filter((note) => note.archived);
  return (
    <div>
      <h2 className="text-2xl mt-6 mb-4">Arsip</h2>
      <div className="grid grid-cols-3 gap-4">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NotesCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              toggleArchive={toggleArchive}
            />
          ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}

export default ArchivedNotes;
