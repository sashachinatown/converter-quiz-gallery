import React from 'react';



const Cards = ({selector, handleSelectCategory, category, page, handlePrevPage, categoryData, filteredCards}) => {
    

    const pages = [];
    let currentPage = [];
    let correctPages;

    for (let i = 0; i < filteredCards.length; i++) {
        if (currentPage.length < 6) {
            currentPage.push(filteredCards[i]);
            if (i === (filteredCards.length - 1)) {
                pages.push(currentPage);
                currentPage = [];
            }
        } else {
            pages.push(currentPage);
            currentPage = [];
            currentPage.push(filteredCards[i]);
            if (i === (filteredCards.length - 1)) {
                pages.push(currentPage);
                currentPage = [];
            }
        }
    }

    if (pages[page]) {
        correctPages = pages[page];
    } else {
        correctPages = pages[page-1];
        handlePrevPage();
    }
    
    const cards = correctPages?.map((item, index) => {
            return (
                <div key={item.id} className='card w-[320px] h-[180px]'>
                    <a href={item.src} target="_blank" rel="noreferrer">
                        <img src={item.src} alt={item.name} className="card-img w-[320px] h-[180px]"/>
                    </a>
                </div>
            )
    })

    const categories = categoryData.map(category => (
        <div 
            onClick={handleSelectCategory}
            key={Math.random().toString(36).substring(2,10)} 
            className='flex flex-row justify-center items-center category w-[240px] h-[360px] cursor-pointer'>
            <span className='absolute text-2xl z-10'>{category.name}</span>
            <img src={category.src} alt={category.name} className='category-img'/>
        </div>
    ));

    return (
        <div className='w-full flex flex-row flex-wrap justify-start'>
            {selector === 'all' || category ? cards : categories}
        </div>
    )
}

export default Cards