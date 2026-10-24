import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        
        <input
            type="text"
            id="searchItem"
            value={search}
            onChange = {(e) => setSearch(e.target.value)}
            placeholder='Search tasks'
        />
    </form>
  )
}

export default SearchItem