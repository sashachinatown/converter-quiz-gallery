import React from 'react';
import { useState } from 'react';

import Filter from './components/Filter';
import Search from './components/Search';
import Cards from './components/Cards';
import PageSwitcher from './components/PageSwitcher';

import Beasts from '../../assets/cards/category-beasts.jpg';
import Characters from '../../assets/cards/category-chars.jpg';
import Items from '../../assets/cards/category-items.png';
import Landscapes from '../../assets/cards/category-landscapes.jpg';


import {animals, bear, ciri, crossbow, dandelion, eredin, gaunter, geralt, gryphon, iris, jen, kaer, lambert, lesh, novigrad, novigrad2, olgierd, skellige, skellige2, succubus, sword, swords, toussaint, triss, troll, velen, velen2, vizima, wolf } from '../../assets/cards/export-media';


const Gallery = () => {
  const filtersData = [
    {
      name: 'Characters',
      subfilters: ['Main', 'Side']
    },
    {
      name: 'Creatures',
      subfilters: ['Magic Beasts', 'Animals']
    },
    {
      name: 'Landscapes',
      subfilters: ['Kaer Morhen', 'Vizima', 'Velen', 'Novigrad', 'Skellige', 'Toussaint']
    },
    {
      name: 'Weapons',
      subfilters: ['Swords', 'Crossbow']
    }
  ]

  const [activeFilters, setActiveFilters] = useState([]);
  const [multipleFilters, setMultipleFilters] = useState([]);
  const [search, setSearch] = useState('');

  const categoryData = [
      {
          name: 'Characters',
          src: Characters
      },
      {
          name: 'Creatures',
          src: Beasts 
      },
      {
          name: 'Landscapes',
          src: Landscapes
      },
      {
          name: 'Weapons',
          src: Items
      }
  ];

  const cardsData = [
      {
          name: 'Geralt',
          src: geralt,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'main']
      },
      {
          name: 'Ciri',
          src: ciri,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'main']
      },
      {
          name: 'Jen',
          src: jen,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'main']
      },
      {
          name: 'Triss',
          src: triss,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'main']
      },
      {
          name: 'Eredin',
          src: eredin,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'main']
      },
      {
          name: 'Lambert',
          src: lambert,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'side']
      },
      {
          name: 'Iris',
          src: iris,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'side']
      },
      {
          name: 'Olgierd',
          src: olgierd,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'side']
      },
      {
          name: 'Gaunter',
          src: gaunter,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'side']
      },
      {
          name: 'Dandelion',
          src: dandelion,
          id: Math.random().toString(36).substring(2,10),
          tags: ['characters', 'side']
      },
      {
          name: 'Lesh',
          src: lesh,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'magic-beasts']
      },
      {
          name: 'Succubus',
          src: succubus,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'magic-beasts']
      },
      {
          name: 'Griffin',
          src: gryphon,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'magic-beasts']
      },
      {
          name: 'Troll',
          src: troll,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'magic-beasts']
      },
      {
          name: 'Animals',
          src: animals,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'animals']
      },
      {
          name: 'Bear',
          src: bear,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'animals']
      },
      {
          name: 'Wolf',
          src: wolf,
          id: Math.random().toString(36).substring(2,10),
          tags: ['creatures', 'animals']
      },
      {
          name: 'Kaer-Morhen',
          src: kaer,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'kaer-morhen']
      },
      {
          name: 'Vizima',
          src: vizima,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'vizima']
      },
      {
          name: 'Velen',
          src: velen,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'velen']
      },
      {
          name: 'Velen-2',
          src: velen2,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'velen']
      },
      {
          name: 'Novigrad',
          src: novigrad,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'novigrad']
      },
      {
          name: 'Novigrad-2',
          src: novigrad2,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'novigrad']
      },
      {
          name: 'Skellige',
          src: skellige,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'skellige']
      },
      {
          name: 'Skellige2',
          src: skellige2,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'skellige']
      },
      {
          name: 'Toussaint',
          src: toussaint,
          id: Math.random().toString(36).substring(2,10),
          tags: ['landscapes', 'toussaint']
      },
      {
          name: 'Sword',
          src: sword,
          id: Math.random().toString(36).substring(2,10),
          tags: ['weapons', 'swords']
      },
      {
          name: 'Swords',
          src: swords,
          id: Math.random().toString(36).substring(2,10),
          tags: ['weapons', 'swords']
      },
      {
          name: 'Crossbow',
          src: crossbow,
          id: Math.random().toString(36).substring(2,10),
          tags: ['weapons', 'crossbow']
      },
  ];

  let filteredCards = [...cardsData];

  if (activeFilters.length) {
    filteredCards = cardsData.filter(card => activeFilters.some(f => card.tags.indexOf(f) !== -1));
  }

  if (search) {
    filteredCards = [...filteredCards].filter(card => card.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && 
      card.name.toLowerCase()[0] === search.toLowerCase()[0]);
  }

  let pagesAmount = Math.ceil(filteredCards.length / 6);

  const [selector, setSelector] = useState('categories');
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState('');
  const [openFilters, setOpenFilters] = useState(window.screen.width > 860 ? true : false);

  const handleChangeSelector = (e) => {
    setSelector(e.currentTarget.value);
    if (e.currentTarget.value === 'all') {
      setCategory('');
      setActiveFilters([]);
      setMultipleFilters([]);
      setSearch('');
      if(page > 0) {
        handlePrevPage();
      }
    }
    if (e.currentTarget.value === 'categories') {
      setCategory('');
      setActiveFilters([]);
      setMultipleFilters([]);
      setSearch('');
      if(page > 0) {
        handlePrevPage();
      }
    }

  }

  const handleSetPage = (e) => {
    setPage(+e.currentTarget.value);
  }

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(prev => prev - 1);
    } else {
      setPage(pagesAmount - 1);
    }
    
  }

  const handleNextPage = () => {
    if (page < pagesAmount - 1) {
      setPage(prev => prev + 1);
    } else {
      setPage(0);
    }
  }

  const handleFilterSelect = (e) => {

    let filterName = e.currentTarget.name;
    
    if (activeFilters.indexOf(filterName) === -1) {
      setActiveFilters(prev => [...prev, filterName]);
    } else {
      setActiveFilters(prev => [...prev].filter(item => item !== filterName))
    }
  }

  const handleMultipleFilters = (e) => {

    let filterName = e.currentTarget.name;
    let filterNumber = filtersData.indexOf(filtersData.find(item => item.name.toLowerCase() === filterName));
    let subArr = filtersData.map(item => item.subfilters.map(sub => sub.toLowerCase().split(' ').join('-')));

    if(multipleFilters.indexOf(filterName) === -1) {
      setMultipleFilters(prev => [...prev, filterName]);
      if (subArr[filterNumber].some(item => activeFilters.indexOf(item) === -1)) {
        setActiveFilters(prev => [...prev, ...subArr[filterNumber]]);
      } 
    } else {
      setMultipleFilters(prev => [...prev].filter(item => item !== filterName));
      
      if (subArr[filterNumber].every(item => activeFilters.indexOf(item) !== -1) && multipleFilters) {
        setActiveFilters(prev => [...prev].filter(item => (subArr[filterNumber].indexOf(item) === -1)));
      }
    }
  }

  const deleteMultipleFilters = (e) => {

    let filterName = e.currentTarget.name;
    let formated = filtersData.map(item => ({...item, subfilters: item.subfilters.map(sub => sub.toLowerCase().split(' ').join('-'))}));
    let filterNumber = formated.indexOf(formated.find(f => f.subfilters.indexOf(filterName) !== -1));
    setMultipleFilters(prev => prev.filter(item => item !== filtersData[filterNumber].name.toLowerCase()));
  }

  const handleSelectCategory = (e) => {
    let categoryName = e.currentTarget.children[0].innerText;
    setCategory(categoryName);

    categoryName === 'Characters' ? setActiveFilters(['main', 'side']) :
    categoryName === 'Creatures' ? setActiveFilters(['magic-beasts', 'animals']) : 
    categoryName === 'Landscapes' ? setActiveFilters(['kaer-morhen', 'vizima', 'velen', 'novigrad', 'skellige', 'toussaint']) :
    categoryName === 'Weapons' ? setActiveFilters(['swords', 'crossbow']) : setActiveFilters([]);
  }

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value)
  } 

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  }

  return (
    <div className='md:mt-16 mt-8 w-[90%] flex flex-col flex-wrap justify-center items-center'>
      <h1 className='text-xl text-center'>The Witcher Photo Gallery</h1>
      <div className='md:mt-8 mt-2 w-full flex flex-row justify-center items-start text-white'>
        <div className={`w-[180px] mt-7 mr-8 ${selector === 'all' && window.screen.width > 860 ? 'md:block hidden' : 'hidden'}`}>
          <Filter 
            filtersData={filtersData}
            activeFilters={activeFilters}
            handleFilterSelect={handleFilterSelect}

            multipleFilters={multipleFilters}
            handleMultipleFilters={handleMultipleFilters}
            deleteMultipleFilters={deleteMultipleFilters}
            
            openFilters={openFilters}
            handleOpenFilters={handleOpenFilters}
            />
        </div>
        <div className='mt-6 w-[1032px] flex flex-col flex-wrap justify-center items-end'>
          <div className={`w-full flex ${window.screen.width > 860 ? 'flex-row' : 'flex-col-reverse'}
            ${pagesAmount < 2 && (selector === 'all' || category ) ? 'justify-end' : 
              selector === 'all' || category ? 'justify-between' : 
              'justify-center'} 
              items-center`}>

            <div className={`mt-4 ${selector === 'all' && window.screen.width < 860 ? 'block' : 'hidden'}`}>
              <Filter 
                filtersData={filtersData}
                activeFilters={activeFilters}
                handleFilterSelect={handleFilterSelect}

                multipleFilters={multipleFilters}
                handleMultipleFilters={handleMultipleFilters}
                deleteMultipleFilters={deleteMultipleFilters}
                
                openFilters={openFilters}
                handleOpenFilters={handleOpenFilters}
                />
            </div>

            <div className={`${window.screen.width > 860 ? 'mt-0' : 'mt-3'} ${(selector === 'all' || category) && pagesAmount > 1 ? '' : 'hidden'}`}>
              <PageSwitcher 
                page={page}
                handleSetPage={handleSetPage} 
                pagesAmount={pagesAmount}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}/>
            </div>

            <div className={`${window.screen.width > 860 ? 'mt-0' : 'mt-4'} flex flex-row ${selector === 'all' && pagesAmount < 2 ? 'md:mr-[25%]' :
              category && pagesAmount > 1 && window.screen.width > 860 ? 'sm:ml-[8%]' : category && pagesAmount < 2 ? 'mr-[18.5%]' : ''}`}>
              <button 
                onClick={handleChangeSelector} 
                value="categories" 
                className={`${selector === 'categories' && !category ? 'underline' : ''}`}>
                  Categories
              </button>
              <p className='ml-2'>/</p>
              <button onClick={handleChangeSelector} value="all" className={`ml-2 ${selector === 'all' ? 'underline' : ''}`}>All</button>
            </div>

            <div className={`${selector === 'all' || category ? '' : 'hidden'}`}>
              <Search handleSearch={handleSearch} search={search}/>
            </div>
          </div>
          
          <Cards 
            selector={selector}
            handleSelectCategory={handleSelectCategory} 
            category={category}
            page={page}
            handlePrevPage={handlePrevPage}
            categoryData={categoryData}
            filteredCards={filteredCards}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery