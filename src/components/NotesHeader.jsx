/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

class NotesHeader extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > 50) return;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    if (title && body) {
      this.props.addNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      });
      this.setState({ title: "", body: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="w-fit  bg-gray-800 p-4 rounded mx-auto justify-center mt-10">
        <p className="text-white">Sisa karakter: {50 - this.state.title.length}</p>
        <input
          type="text"
          name="title"
          className="p-2 w-full rounded mb-2 bg-gray-700 text-white"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <textarea
          name="body"
          className="p-2 w-full rounded mb-2 bg-gray-700 text-white"
          placeholder="Tulis catatanmu di sini ..."
          value={this.state.body}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Buat
        </button>
      </form>
    );
  }
}

export default NotesHeader;