import React, { useState, useEffect } from 'react'
import './Modal.css'
const Modal = ({ setModal, valueModal }) => {
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events'))||[])
 
  const onSubmit = (e) => {
    e.preventDefault()
    const obj={date:e.target[0].value,info:e.target[1].value}
    
    setEvents([...events ,obj  ])
    
    e.target[1].value = ''
  }
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);
 const found= Object.values(events).filter(el=>el.date===valueModal)
 
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
        
          {found&&found.map((ev, inx) => {
            return <p key={inx}>{ev.info}</p>
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
