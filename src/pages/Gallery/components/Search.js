import React from 'react'

const Search = ({handleSearch, search}) => {
  return (
    <div>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search' className='py-1 px-2 bg-black border-2 border-gray-400'/>
    </div>
  )
}

export default Search