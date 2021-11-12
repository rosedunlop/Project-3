import React from 'react'

const Search = () => {
  const handleSearch = async (event) => {
    const query = event.target.value
    console.log(query)
  }

  return (
    <form>
      <input
        type='text'
        id='header-search'
        placeholder='search recipes'
        name='search'
      ></input>
      <button type='submit' onSubmit={handleSearch}>
        search
      </button>
    </form>
  )
}

export default Search
