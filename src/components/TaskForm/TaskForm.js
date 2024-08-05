import React, { useState } from 'react'

export default function TaskForm ({ onSubmit }) {
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('')

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Prevent adding empty tasks
    if (!description.trim()) {
      return
    }

    if (!dueDate) return
    if (!priority) return

    // Pass the new task to the parent component
    onSubmit({ description, dueDate, priority })

    // Clear form inputs
    setDescription('')
    setDueDate('')
    setPriority('')
  }

  return (
    <form onSubmit={handleSubmit} className='TaskForm'>
      <h2>Add New Task</h2>
      <div>
        <label htmlFor='description'>Description:</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Task description'
          className='TaskForm-input'
        />
      </div>

      <div>
        <label htmlFor='dueDate'>Due Date:</label>
        <input
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className='TaskForm-input'
        />
      </div>

      <div>
        <label htmlFor='priority'>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className='TaskForm-select'
        >
          <option value=''>Select priority</option>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>

      <button type='submit' className='TaskForm-submitButton'>Add Task</button>
    </form>
  )
}
