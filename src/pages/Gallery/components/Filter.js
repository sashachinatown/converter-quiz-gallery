import React from 'react';

import filterIcon from '../../../assets/funnel.svg';

const Filter = ({filtersData, activeFilters, handleFilterSelect, multipleFilters, handleMultipleFilters, deleteMultipleFilters, openFilters, handleOpenFilters}) => {

    const filters = filtersData.map(f => (
        <div key={Math.random().toString(36).substring(2,10)} className='mt-2 flex flex-col justify-start items-start'>
            <div className='hover:text-red-600'> 
                <input 
                    onChange={handleMultipleFilters} 
                    type="checkbox" 
                    id={f.name.toLowerCase().split(' ').join('-')} 
                    name={f.name.toLowerCase().split(' ').join('-')} 
                    checked={`${multipleFilters.indexOf(f.name.toLowerCase().split(' ').join('-')) !== -1 ? 'checked' : ''}`}/>
                <label htmlFor={f.name.toLowerCase().split(' ').join('-')}  className='ml-1'> {f.name}</label>
            </div>

            <div name="characters-wrapper" className='flex flex-col mt-1 ml-5 text-sm'>
                {f.subfilters.map((sub, index) => (
                    <div key={Math.random().toString(36).substring(2,10)} className='hover:text-red-600'>
                    <input 
                        onChange={handleFilterSelect}
                        onClick={deleteMultipleFilters} 
                        type="checkbox" 
                        id={sub.toLowerCase().split(' ').join('-')} 
                        name={sub.toLowerCase().split(' ').join('-')}
                        checked={`${activeFilters.indexOf(sub.toLowerCase().split(' ').join('-')) !== -1 ? 'checked' : ''}`}/>
                    <label htmlFor={sub.toLowerCase().split(' ').join('-')} className='ml-1'> {sub}</label>
                    </div>
                ))}
            </div>
        </div>
    ))

    return (
    <div className=''>
        
        <button onClick={handleOpenFilters} className='text-lg flex flex-row justify-center items-center cursor-auto'>
            <img src={filterIcon} alt="funnel"/> 
            <p>&nbsp;Filter cards:</p>
        </button>
        {openFilters ? filters : <></>}
    </div>
    )
    }

export default Filter