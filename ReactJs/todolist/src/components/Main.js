import React, { Component } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';
export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'make coffee',
      'drink water',
      'study',
    ]
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  render(){
    const { newTask, tasks } = this.state;
    return(
      <div className="container col-5">
        <div className="container d-flex flex-column bg-white mt-5 p-2 justify-content-center align-items-center rounded border border-info">
          <h1 className='text-center'>To-do list</h1>
          <form action="#">
            <div className="d-flex col text-center">
              <input
                onChange={this.handleChange}
                type="text"
                className='form-control border-right-0'
                value={newTask}
              />
              <button type="submit" className="rounded ms-1">
              <Plus
                size={35}
                className="bg-danger"
              />
              </button>
            </div>
          </form>

          <ul className="tasks mt-2 col-10">
            {tasks.map((task) => (
              <li key={task} className="d-flex justify-content-between p-2">
                {task}
                <div className='mb-1'>
                  <FaEdit
                    size={25}
                  />
                  <FaWindowClose
                    className='ms-2'
                    size={25}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
