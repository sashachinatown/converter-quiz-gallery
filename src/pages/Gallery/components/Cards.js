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
                <div key={item.id} className='card md:w-[320px] md:h-[180px]'>
                    <a href={item.src} target="_blank" rel="noreferrer">
                        <img src={item.src} alt={item.name} className="card-img md:w-[320px] md:h-[180px]"/>
                    </a>
                </div>
            )
    })

    const categories = categoryData.map(category => (
        <div 
            onClick={handleSelectCategory}
            key={Math.random().toString(36).substring(2,10)} 
            className='category  flex flex-row justify-center items-center sm:w-[240px] sm:h-[360px] w-[200px] h-[300px] cursor-pointer'>
            <span className='absolute sm:text-2xl text-lg z-10'>{category.name}</span>
            <img src={category.src} alt={category.name} className='category-img'/>
        </div>
    ));

    return (
        <div className={`cards-container md:w-full w-[100vw]  flex flex-row flex-wrap `}>
            {selector === 'all' || category ? cards : categories}
        </div>
    )
}

export default Cards