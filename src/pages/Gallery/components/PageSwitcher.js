import React from 'react';
import icon from '../../../assets/icon.png';

const PageSwitcher = ({page, handleSetPage, pagesAmount, handleNextPage, handlePrevPage}) => {
    let pages = [];

    for (let i = 0; i < pagesAmount; i++) {
        pages.push(i);
    }

    const switchers = pages.map((btn, index) => (
        <button onClick={handleSetPage} key={index} value={index}>
            <img src={icon} alt="icon" className={`page-switcher${+index === page ? '-active' : ''} w-[24px] h-[32px]`}/>
        </button>
    ))
    return (
    <div className={`${window.screen.width > 860 ? 'ml-6' : 'ml-0'} flex flex-row justify-center items-center`}>
                <button onClick={handlePrevPage} className='arrow-left ml-4 mr-2 '>{`◁`}</button>
                {switchers}
                <button onClick={handleNextPage} className='ml-4 '>{`▷`}</button>
    </div>
    )
}

export default PageSwitcher