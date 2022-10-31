import React from 'react'

function Sidebar({ notes, currentNote, setCurrentNoteId, newNote }) {
  const noteElement = notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippit">Note {index + 1}</h4>
      </div>
    </div>
  ))

  return (
    <secton className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>+</button>
      </div>
      {noteElement}
    </secton>
  )
}

export default Sidebar