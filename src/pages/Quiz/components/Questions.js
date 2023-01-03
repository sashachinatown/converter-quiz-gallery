import React from 'react'

const Questions = ({question, questionsList, handleAnswer, currentAnswer}) => {

    const current = questionsList[question];
    const options = current.options.map((btn, index) => 
        <button 
            key={index} 
            name={index} 
            onClick={handleAnswer} 
            className={`quest-btn sm:text-base text-sm sm:py-4 py-3 sm:px-4 px-2 sm:w-[300px] w-[250px] ${+currentAnswer === index ? 'bg-white text-black hover:bg-white' : ''}`}>{btn}</button>
    )

    return (
    <div className='md:mt-12 mt-4 flex flex-col flex-wrap justify-center items-center'>
        <h1 className='md:text-lg text-sm h-8 text-center sm:px-auto px-8'>{question+1}. {current.question}</h1>
        <div className='w-[70%] sm:mt-8 mt-4 flex flex-row flex-wrap justify-center items-center'>
            {options}
        </div>
    </div>
    )
}

export default Questions