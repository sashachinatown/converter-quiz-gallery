import React from 'react';
import geralt from '../assets/geralt.png'

const EmptyPage = () => {
  return (
    <div className='h-[90.6vh] flex flex-col justify-end items-center'>
        <img src={geralt} alt="geralt" className={`md:w-[60%] w-full`}/>
    </div>
  )
}

export default EmptyPage