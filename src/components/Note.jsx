import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const { title, content } = props;

  function deleteNote() {
    const { id, onDelete } = props;
    onDelete(id);
  }

  return (
    <div onClick={deleteNote} className="note" role="presentation">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button">Delete</button>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
