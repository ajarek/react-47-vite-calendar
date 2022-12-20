import React, { useState } from 'react'
import './Calendar.css'
const Calendar = () => {
  const [days,setDays]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
  return (
    <div className='days-wrapper'>
      {days.map(day=>{
        return(
          <div className="day">{day}</div>
        )
      })}
    </div>
  )
}

export default Calendar