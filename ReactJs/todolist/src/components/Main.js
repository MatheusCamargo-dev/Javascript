/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Form from './Form';
import Tasks from './Tasks';

import './Main.css';
export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if(!tasks) return;

    this.setState({tasks});
  }
  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if(tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('i')
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

    // const ReactNewTask = document.getElementById('React-View')
    // ReactNewTask.focus()
  }

  handleEdit = (e, index) => {
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
    console.log(tasks)
    return(
      <div className="container col-5">
        <div className="container d-flex flex-column bg-white mt-5 p-2 justify-content-center align-items-center rounded border border-info">
          <h1 className='text-center'>To-do list</h1>

            <Form
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              newTask={newTask}
            />

            <Tasks
              tasks={tasks}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />

        </div>
      </div>
    )
  }
}
