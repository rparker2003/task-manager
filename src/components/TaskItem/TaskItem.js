import React from 'react'

export default function TaskItem ({ task, onToggleComplete, onDelete, onEdit }) {
  // class name is completed or empty based on task.completed state
  //  sets the description in header, and due and priority as page?
  //  on click of task update, call toggle complete with id and update status text
  //  on click of task delete, call on delete with id
  const handleShowTaskInfo = () => {
    if (!task.completed) {
      return (
        <div>
          <p>Due: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
        </div>
      )
    }
  }
  return (
    <li className={`TaskItem ${task.completed ? 'TaskItem-completed' : ''}`}>
      <div className='task-item-content'>
        <h3>
          <input className='task-item-checkbox'
            type='checkbox'
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          {task.description}
        </h3>
        {handleShowTaskInfo()}
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}
