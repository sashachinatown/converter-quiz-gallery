import React from 'react';
import { useState, useEffect } from 'react';
import Questions from './components/Questions';
import ProgressBar from './components/ProgressBar';
import Results from './components/Results';
import Timer from './components/Timer';

import logo from '../../assets/logo.png';


const Quiz = () => {
  const [question, setQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isStartPage, setStartPage] = useState(true);
  const [isCompleted, setCompleted] = useState(false);
  const [nextBtnContent, setnextBtnContent] = useState('Next');

  const [time, setTime] = useState(10);

  const questionsList = [
    {
        "question" : "The cover of the game has a man with grey hair holding a:",
        "options" : [
            "Spear",
            "Sword",
            "Arrow and bow",
            "Gun"
        ],
        "correct" : 1
    },
    {
        "question" : "Geralt has a scar on:",
        "options" : [
            "His left eye",
            "His right eye",
            "His shoulder",
            "His neck"
        ],
        "correct" : 0
    },
    {
        "question" : "Who is the main character in the game?",
        "options" : [
            "The Witcher",
            "Geralt",
            "Lambert",
            "Ciri"
        ],
        "correct" : 1
    },
    {
        "question" : "The silver sword can kill all but is more effective against:",
        "options" : [
            "Humans",
            "Animals",
            "Both humans and animals",
            "Demons and such creatures"
        ],
        "correct" : 3
    },
    {
        "question" : "Geralt was once a part of The Wild Hunt. Is it true?",
        "options" : [
            "Not at all",
            "Yes, but then he left them",
            "Yes he was and he is",
            "Wild Hunt doesn't exist"
        ],
        "correct" : 1
    },
    {
        "question" : "The Witcher 3: Wild Hunt is a:",
        "options" : [
            "Role-playing game",
            "Puzzle game",
            "Strategy",
            "None of this"
        ],
        "correct" : 0
    },
    {
        "question" : "Game “The Witcher” is based on:",
        "options" : [
            "A legend",
            "A web series",
            "A novel series",
            "A movie"
        ],
        "correct" : 2
    },
    {
        "question" : "In which school has Geralt studied?",
        "options" : [
            "School of Snakes",
            "School of Wolves",
            "School of Cats",
            "School of Bears"
        ],
        "correct" : 1
    },
    {
        "question" : "What happened due to “Conjunction of Spheres”?",
        "options" : [
            "Everyone died",
            "Geralt died",
            "Magic entered the world",
            "Ciri lost her powers"
        ],
        "correct" : 2
    },
    {
        "question" : "Who was Ciri hiding from?",
        "options" : [
            "The Wild Hunt",
            "The Avengers",
            "Her parents",
            "Rulers of the state"
        ],
        "correct" : 0
    },
    null
  ]

  useEffect(() => {
    if (!isStartPage && !isCompleted) {
      let timer = setInterval(() => updateTime(), 1000 );
        return () => {
            clearInterval(timer);
        };
      }
    }
  );

  function updateTime() {
    if (time > 0) {
      setTime(time-1);
      if (time === 1 && !currentAnswer) {
        setCurrentAnswer('xxx');
      }
    } else {
      handleNextQuestion();
      setTime(10);
      setCurrentAnswer(undefined);
    }
  }


  const handleStartQuiz = () => {
    setStartPage(false);
  }

  const handleNextQuestion = () => {
    setnextBtnContent('Next');
    if ((question + 1) > 9) {
      setCompleted(true);
      setTime(10);
    }
    if (currentAnswer !== undefined || currentAnswer === 'xxx') {
      
      setTime(10);
      if (question < 9) {
        setQuestion(question => question + 1);
        checkAnswer();
      } else {
        checkAnswer();
      }
    } else {
      setnextBtnContent('Choose an answer!');
    }
    
  }

  const handleAnswer = (e) => {
    setnextBtnContent('Next');
    setCurrentAnswer(e.currentTarget.name);
  };

  const checkAnswer = () => {

    if(+currentAnswer === questionsList[question].correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    setCurrentAnswer(undefined);
  }

  const handleRestart = () => {
    setQuestion(0);
    setCurrentAnswer(undefined);
    setCorrectAnswers(0);
    setCompleted(false);
    setTime(10);
  }

  return (
    <div className={`${!isStartPage && !isCompleted ? `questions-bg-${question+1}` : ''} 
        ${isCompleted ? '' : 'md:mt-10'} mt-auto mb-[40%] w-full md:h-fit  flex flex-col flex-wrap justify-center items-center`}>
      <div className=' flex flex-col flex-wrap justify-center items-center md:w-[65%] w-full  bg-black bg-opacity-75'>
        <h1 className='md:mt-14 mt-8 md:px-auto px-8 md:text-xl text-base text-center '>{`${isStartPage ? 'Welcome to' : ''} "The Witcher" universe quiz ${!isStartPage && !isCompleted ? `(${question+1}/${questionsList.length-1})` : ''}`}</h1>
        <span className={`mt-2 md:px-auto px-8 text-center ${isStartPage ? 'italic text-md' : isCompleted ? 'md:text-lg text-base' : 'hidden'}`}>{`${isStartPage ? "Let's see how well you know this fantasy world" : 'Your results:'}`}</span>

        <div className={`${isStartPage ? 'flex flex-col flex-wrap justify-center items-center' : 'hidden'}`}>
          <img src={logo} alt="wolf-logo" className='logo mt-12'/>
          <button 
            onClick={handleStartQuiz} 
            className='mt-10 mb-16 py-2 px-5 border-2 text-lg border-white hover:bg-white hover:text-black'>Start</button>
        </div>
        
        <div className={`${isStartPage || isCompleted ? 'hidden' : 'flex flex-col flex-wrap justify-center items-center'}`}>
          <Timer time={time}/>
          <Questions question={question} questionsList={questionsList} handleAnswer={handleAnswer} currentAnswer={currentAnswer}/>
          <button 
            onClick={handleNextQuestion} 
            className='md:mt-[44px] mt-[30px] py-2 px-5 border-2 text-lg border-white hover:bg-white hover:text-black'>
              {question < 9 ? `${nextBtnContent}` : 'Get Results'}
          </button>
          <ProgressBar question={question} questionsList={questionsList}/>
        </div>
        
        <div className={`${isCompleted ? '' : 'hidden'}`}>
          <Results correctAnswers={correctAnswers} handleRestart={handleRestart}/>
        </div>
      </div>
    </div>
  )
}

export default Quiz