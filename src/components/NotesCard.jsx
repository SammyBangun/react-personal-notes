/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { showFormattedDate } from "../utils";

function NotesCard({ note, deleteNote, toggleArchive }) {
  return (
    <div className="bg-gray-700 p-4 rounded">
      <h3 className="font-bold text-lg">{note.title}</h3>
      <p className="text-sm mb-2">{note.body}</p>
      <p className="text-sm text-gray-400">
        {showFormattedDate(note.createdAt)}
      </p>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded mt-2 mr-2"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
      <button
        className="bg-yellow-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => toggleArchive(note.id)}
      >
        {note.archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NotesCard;
