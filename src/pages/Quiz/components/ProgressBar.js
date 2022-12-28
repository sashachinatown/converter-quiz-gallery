import React from 'react'

const ProgressBar = ({question, questionsList}) => {
    
    const bars = questionsList.map((obj, index) => 
        <div key={index} className={`${index < question + 1 ? 'curr-progress' : ''} h-[10px] w-[10%] bg-gray-300`}></div>
    )
    return (
        <div className='sm:mt-[54px] mt-[36px] w-full flex flex-row justify-center items-center'>
          {bars}
        </div>
    )
}

export default ProgressBar