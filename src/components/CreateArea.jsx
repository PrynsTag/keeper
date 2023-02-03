import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
  function handleSubmit(event) {
    event.preventDefault();

    const {
      title: { value: titleValue },
      content: { value: contentValue },
    } = event.target.elements;

    const { onAdd } = props;
    onAdd({ id: uuidv4(), title: titleValue, content: contentValue });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
