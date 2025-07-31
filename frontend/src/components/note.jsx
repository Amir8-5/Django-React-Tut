import React from "react";
import { TrashIcon } from "lucide-react";

const Note = ({ note, onDelete }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "Invalid date";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-white">{note.title}</h3>
        <button
          onClick={() => onDelete(note.id)}
          className="text-gray-500 hover:text-red-400 transition-colors"
          aria-label="Delete note"
        >
          <TrashIcon size={16} />
        </button>
      </div>
      <p className="text-gray-400 mb-3 whitespace-pre-line">{note.content}</p>
      <div className="text-gray-500 text-xs">
        {formatDate(new Date(note.createdAt))}
      </div>
    </div>
  );
};
export default Note;
