import React from 'react'

const Questions = ({question, questionsList, handleAnswer, currentAnswer}) => {

    const current = questionsList[question];
    const options = current.options.map((btn, index) => 
        <button 
            key={index} 
            name={index} 
            onClick={handleAnswer} 
            className={`quest-btn ${+currentAnswer === index ? 'bg-white text-black hover:bg-white' : ''}`}>{btn}</button>
    )

    return (
    <div className='mt-12 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='text-lg'>{question+1}. {current.question}</h1>
        <div className='w-[80%] mt-8 flex flex-row flex-wrap justify-center items-center'>
            {options}
        </div>
    </div>
    )
}

export default Questions