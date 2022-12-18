import React from 'react';

import johnny from '../../../assets/johnny.jpg';
import dandellion from '../../../assets/dandellion.jpg';
import geralt from '../../../assets/geralt.jpg';
import jennefer from '../../../assets/jennefer.jpg';
import avallach from '../../../assets/avallach.jpg';

const Results = ({correctAnswers}) => {
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
    <div className='mt-8 py-12 px-16 flex flex-col justify-center items-center border-2 border-white'>
        <h1 className='text-xl'>You've scored {correctAnswers}/10</h1>
        <div className={`flex flex-row justify-center items-center`}>
            <img src={img} alt="character" className='mt-6 h-[175px] w-[175px] rounded-full'/>
            <span className='ml-12'>{text}</span>
        </div>
    </div>
    )
}

export default Results