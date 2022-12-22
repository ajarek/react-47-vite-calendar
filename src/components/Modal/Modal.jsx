import React, { useState } from 'react'
import './Modal.css'
const Modal = ({ setModal, valueModal }) => {
  const [events, setEvents] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    setEvents([...events, e.target[1].value])
    e.target[1].value = ''
  }
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <form onSubmit={onSubmit}>
          <div className='date'>
            <input
              
              type='text'
              disabled={true}
              value={valueModal}
              id='date'
            />
          </div>
          <div className="wrapper">
          <div className='todo'>
            <input
              type='text'
              placeholder='add an event'
              id='todo'
            />
          </div>
          <div className="submit">
          <input
            type='submit'
            value='Save'
            id='submit'
          />
          </div>
          </div>
        </form>
        <div className='body'>
          {events.map((ev, inx) => {
            return <p key={inx}>{ev}</p>
          })}
        </div>

        <button
          onClick={() => {
            setModal()
          }}
          className='cancelBtn'
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default Modal
