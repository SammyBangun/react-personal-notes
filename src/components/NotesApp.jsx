/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import NotesList from "./NotesList";
import NotesHeader from "./NotesHeader";
import SearchBar from "./SearchBar";
import { getInitialData, showFormattedDate } from "../utils";
import "../index.css";

class NotesApp extends Component {
  constructor() {
    super();
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };
  }

  addNote = (note) => {
    this.setState({ notes: [...this.state.notes, note] });
  };

  deleteNote = (id) => {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  };

  toggleArchive = (id) => {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    });
  };

  searchNotes = (keyword) => {
    this.setState({ searchKeyword: keyword });
  };

  render() {
    const { notes, searchKeyword } = this.state;
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-gray-900 text-white p-5">
        <h1 className="text-3xl font-bold mb-4">Notes</h1>
        <NotesHeader addNote={this.addNote} />
        <SearchBar onSearch={this.searchNotes} />
        <NotesList
          notes={filteredNotes}
          deleteNote={this.deleteNote}
          toggleArchive={this.toggleArchive}
        />
      </div>
    );
  }
}

export default NotesApp;
