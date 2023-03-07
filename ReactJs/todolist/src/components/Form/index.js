/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-bootstrap-icons';


export default function Form({handleSubmit, handleChange, newTask}) {
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="d-flex col text-center">
        <input
          onChange={handleChange}
          type="text"
          className='form-control border-right-0'
          value={newTask}
          id="React-View"
        />
        <button type="submit" className="rounded ms-1">
          <Plus
            size={35}
            className="bg-danger"
          />
        </button>
      </div>
    </form>
  );
}

Form.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,

}
