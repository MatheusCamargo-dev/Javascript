import React, { Component } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';
export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1 || newTask === '') return;

    const newTasks = [...tasks];

    if(index === -1){
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      })
    }else{
      newTasks[index] = newTask;
      this.setState({
        tasks: [...newTasks],
        index: -1,
      })
    }

    newTask.focus;
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
    const { tasks } = this.state;

    this.setState({
      index: index,
      newTask: tasks[index],
    })
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
    })

  }
  render(){
    const { newTask, tasks } = this.state;
    return(
      <div className="container col-5">
        <div className="container d-flex flex-column bg-white mt-5 p-2 justify-content-center align-items-center rounded border border-info">
          <h1 className='text-center'>To-do list</h1>
          <form action="#" onSubmit={this.handleSubmit}>
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
              {tasks.map((task, index) => (
                <li key={task} className="d-flex justify-content-between align-items-center p-2">
                  <span>{task}</span>
                  <div>
                    <FaEdit
                      size={25}
                      onClick={(e) => this.handleEdit(e, index)}
                    />
                    <FaWindowClose
                      size={25}
                      className="ms-1"
                      onClick={(e) => this.handleDelete(e, index)}
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
