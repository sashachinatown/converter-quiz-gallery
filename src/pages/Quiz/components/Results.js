import React from 'react';

import johnny from '../../../assets/johnny.jpg';
import dandellion from '../../../assets/dandellion.jpg';
import geralt from '../../../assets/geralt.jpg';
import jennefer from '../../../assets/jennefer.jpg';
import avallach from '../../../assets/avallach.jpg';

const Results = ({correctAnswers, handleRestart}) => {
    const img = 
        correctAnswers < 3 ? johnny :
        correctAnswers < 6 ? dandellion :
        correctAnswers < 8 ? geralt :
        correctAnswers < 10 ? jennefer :
        avallach;

    const text = correctAnswers < 3 ? 'Ouch... Seems like you barely know anything about The Witcher. What about playing some time?' :
        correctAnswers < 6 ? 'Not so bad, you know a little bit about Geralt and his friends (but probably from the words of the others).' :
        correctAnswers < 8 ? 'You have a strong general idea about the universe, plot and characters. Anyway, pay attention to details.' :
        correctAnswers < 10 ? 'Well done! You have probably played this fantastic game a lot. Jennefer is proud of you!' :
        "Oh... My... God... Congratulations! Your knowledge is impressive. Even Avallac'h, the wisest of elves, is applauding you!";

    return (
    <div className='mt-8 md:py-12 py-8 md:px-16 px-8 flex flex-col justify-center items-center md:bg-black bg-neutral-900 md:border-2 border-white'>
        <h1 className='md:text-xl text-base'>You've scored {correctAnswers}/10</h1>
        <div className={`md:mt-4 mt-0 flex md:flex-row flex-col justify-center items-center`}>
            <img src={img} alt="character" className='mt-6 md:h-[175px] md:w-[175px] h-[125px] w-[125px] rounded-full'/>
            <span className='md:ml-12 md:mt-0 mt-4 md:text-left text-center md:text-base text-sm'>{text}</span>
        </div>
        <button onClick={handleRestart} className='md:mt-4 mt-8 py-2 px-5 border-2 text-lg border-white hover:bg-white hover:text-black'>Retry</button>
    </div>
    )
}

export default Results