import React from 'react';
import geralt from '../assets/geralt.png'

const EmptyPage = () => {
  return (
    <div className='h-[90.6vh] flex flex-col justify-end items-center'>
        <img src={geralt} alt="geralt" className='h-[60%]'/>
    </div>
  )
}

export default EmptyPage