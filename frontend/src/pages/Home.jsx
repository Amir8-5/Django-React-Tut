import React, { useEffect, useState } from "react";
import api from "../api.js";
import Note from "../components/note.jsx";
import "../styles/index.css";
import { BookOpenIcon, PlusIcon, PenIcon } from "lucide-react";
const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    console.log("getting notes");
    api
      .get("notes/")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => {
        alert("Error fetching notes:", err);
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created");
        else alert("Failed to make Note");
        console.log("before calling get");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted");
        else alert("Failed to delete note");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      <div
        className="absolute h-64 w-64 rounded-full bg-blue-500/10 blur-3xl opacity-70"
        style={{
          top: "10%",
          left: "5%",
        }}
      ></div>
      <div
        className="absolute h-80 w-80 rounded-full bg-purple-500/10 blur-3xl opacity-70"
        style={{
          bottom: "5%",
          right: "10%",
        }}
      ></div>
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center justify-center mb-2">
            <BookOpenIcon className="mr-2 text-blue-400" />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              NoteTaker
            </h1>
          </div>
          <p className="text-gray-400 text-center max-w-lg mx-auto">
            Capture your thoughts and ideas in a clean, minimalist space.
          </p>
        </header>
        {/* Notes display */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-300 flex items-center">
            <PenIcon size={18} className="mr-2" />
            Your Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.length > 0 ? (
              notes.map((note) => (
                <Note key={note.id} note={note} onDelete={deleteNote} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-gray-400">
                  No notes yet. Create your first note below!
                </p>
              </div>
            )}
          </div>
        </section>
        {/* Create note form */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-300 flex items-center">
            <PlusIcon size={18} className="mr-2" />
            Create New Note
          </h2>
          <form
            onSubmit={createNote}
            className="bg-gray-800 border border-gray-700 rounded-lg p-5 space-y-4"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Note title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="bg-gray-700 border-gray-600 text-white w-full px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your note here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center"
            >
              <PlusIcon size={18} className="mr-2" />
              Add Note
            </button>
          </form>
        </section>
      </div>
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(
              to right,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(55, 65, 81, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};
export default HomePage;
