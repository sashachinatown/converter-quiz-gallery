import React from 'react'

const Timer = ({time}) => {
  return (
    <div className='mt-3 text-lg'>0:{time < 10 ? '0' : ''}{time}</div>
  )
}

export default Timer;