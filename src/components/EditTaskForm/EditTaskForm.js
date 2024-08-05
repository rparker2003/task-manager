import React, { useState } from 'react'

export default function EditTaskForm ({ currentTask, onSubmit }) {
  const [description, setDescription] = useState(currentTask.description)
  const [priority, setPriority] = useState(currentTask.priority)
  const [dueDate, setDueDate] = useState(currentTask.dueDate)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description.trim()) {
      return
    }

    if (!dueDate) return
    if (!priority) return

    const updatedTask = { ...currentTask, description, priority, dueDate }
    onSubmit(updatedTask)
  }

  return (
    <form onSubmit={handleSubmit} className='TaskForm'>
      <h2>Edit Task</h2>
      <div>
        <label htmlFor='edit-description'>Description</label>
        <input
          id='edit-description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor='edit-due-date'>Due Date</label>
        <input
          id='edit-due-date'
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='edit-priority'>Priority</label>
        <select
          id='edit-priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>
      <button type='submit'>Update Task</button>
    </form>
  )
}
