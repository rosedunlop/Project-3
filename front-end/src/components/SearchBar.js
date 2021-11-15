import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(null)
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <form action='/' method='get' autoComplete='off'>
        <input
          type='text'
          id='header-search'
          placeholder='search recipes'
          name='query'
          onChange={handleChange}
        />
        <Link
          to={{ pathname: '/search-results', search: `?query=${searchValue}` }}
        >
          <button type='submit'>search</button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar
