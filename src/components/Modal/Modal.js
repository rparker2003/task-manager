import React from 'react'

export default function Modal ({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className='modal-overlay'>
      <div>
        <button className='modal-close-button' onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
