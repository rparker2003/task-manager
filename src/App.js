import React, { useState } from 'react'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskForm from './components/TaskForm/TaskForm'
import EditTaskForm from './components/EditTaskForm/EditTaskForm'
import Modal from './components/Modal/Modal'

export default function App () {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false)
  const [isEditFormOpen, setIsEditFormOpen] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }])
    setIsTaskFormOpen(false)
  }

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task =>
      task.id !== taskId
    ))
  }

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    ))
    setIsEditFormOpen(false)
    setTaskToEdit(null)
  }

  const openEditForm = (task) => {
    setTaskToEdit(task)
    setIsEditFormOpen(true)
  }

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  // now that we have a filter, we must modify the argument passed to TaskList
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Task Manager</h1>
      </header>
      <main className='App-main'>
        <button
          className='Add-task-button'
          onClick={() => setIsTaskFormOpen(true)}
        >
          Add New Task
        </button>

        <TaskFilter currentFilter={filter} onFilterChange={changeFilter} />

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
          onEdit={openEditForm}
        />

        {isTaskFormOpen && (
          <Modal
            isOpen={isTaskFormOpen}
            onClose={() => setIsTaskFormOpen(false)}
          >
            <TaskForm onSubmit={addTask} />
          </Modal>
        )}

        {isEditFormOpen && (
          <Modal
            isOpen={isEditFormOpen}
            onClose={() => setIsEditFormOpen(false)}
          >
            <EditTaskForm currentTask={taskToEdit} onSubmit={editTask} />
          </Modal>
        )}
      </main>
    </div>
  )
}
