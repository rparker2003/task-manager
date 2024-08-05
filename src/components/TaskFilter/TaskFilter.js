import React from 'react'

export default function TaskFilter ({ currentFilter, onFilterChange }) {
  return (
    <div className='TaskFilter'>
      <label htmlFor='filter'>Filter tasks:</label>
      <select
        id='filter'
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value='all'>All</option>
        <option value='active'>Active</option>
        <option value='completed'>Completed</option>
      </select>
    </div>
  )
}
