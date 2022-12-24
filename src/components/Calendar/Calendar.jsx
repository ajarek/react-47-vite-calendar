import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import './Calendar.css'
const Calendar = () => {
  const today = new Date()
  const [x, setX] = useState(2022)
  const [y, setY] = useState(11)
  const [z, setZ] = useState(today.getUTCDate())
  const date = new Date(x, y, z)
  const monthActual = date.getMonth() + 1
  const yearActual = date.getFullYear()
  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 0)
  }
  const firstDayOfMonth =
    getFirstDayOfMonth(x, y).getDay() - 1 <= 0
      ? 6
      : getFirstDayOfMonth(x, y).getDay()

  const arrData = new Array(firstDayOfMonth).fill('')
  const [daysInWeek, setDaysInWeek] = useState([
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ])
  const [days, setDays] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [dataDay, setDataDay] = useState(22)
  const [dataMonth, setDataMonth] = useState(12)
  const [dataYear, setDataYear] = useState(2022)
  const options = { month: 'long' }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
  }

  function getDayInArray() {
    days.length = 0
    for (let i = 0; i < getDaysInMonth(yearActual, monthActual); i++) {
      days.push(i + 1)
    }
  }
  getDayInArray()

  function showModal(e) {
    setDataDay(e.target.dataset.day)
    setDataMonth(e.target.dataset.month)
    setDataYear(e.target.dataset.year)

    setOpenModal(!openModal)
  }

  useEffect(() => {
    const items = [...document.querySelectorAll('.day')]
    items.map((item) => {
      if (
        item.innerHTML == today.getDate() &&
        date.toLocaleDateString('en-US', options) ===
          today.toLocaleDateString('en-US', options) &&
        x == today.getFullYear()
      ) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }, [x, y])

  function setModal() {
    setOpenModal(false)
  }
  return (
    <>
      {openModal ? (
        <Modal
          setModal={setModal}
          valueModal={`${dataDay < 10 ? '0' + dataDay : dataDay}-${
            dataMonth < 10 ? '0' + dataMonth : dataMonth
          }-${dataYear}`}
        />
      ) : null}
      <div className='calendar-header'>
        <div className='header-wrapper'>
          <button onClick={() => setY(y - 1)}>◁</button>
          <h4>{date.toLocaleDateString('en-US', options)}</h4>
          <button onClick={() => setY(y + 1)}>▷</button>
        </div>
        <div className='header-wrapper'>
          <button onClick={() => setX(x - 1)}>◁</button>
          <h4>{yearActual}</h4>
          <button onClick={() => setX(x + 1)}>▷</button>
        </div>
      </div>
      <div className='days-wrapper'>
        {daysInWeek.map((day) => {
          return (
            <div
              key={day}
              className='day'
            >
              {day}
            </div>
          )
        })}
        {arrData.concat(days).map((dey, index) => {
          return (
            <div
              className={
                index == 5 ||
                index == 12 ||
                index == 19 ||
                index == 26 ||
                index == 33 ||
                index == 6 ||
                index == 13 ||
                index == 20 ||
                index == 27 ||
                index == 34
                  ? 'day red'
                  : 'day'
              }
              key={index}
              data-day={dey}
              data-month={monthActual}
              data-year={yearActual}
              onClick={showModal}
            >
              {dey}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Calendar
