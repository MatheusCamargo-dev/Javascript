/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({tasks, handleEdit, handleDelete}) {
    return(
      <ul className="tasks mt-2 col-10">
        {tasks.map((task, index) => (
          <li key={task} className="d-flex justify-content-between align-items-center p-2">
            <span>{task}</span>
            <div>
              <FaEdit
                size={25}
                onClick={(e) => handleEdit(e, index)}
              />
              <FaWindowClose
                size={25}
                className="ms-1"
                onClick={(e) => handleDelete(e, index)}
              />
            </div>
          </li>
        ))}
      </ul>
    );
}

Tasks.PropTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,

}
