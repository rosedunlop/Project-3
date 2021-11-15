import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(null)
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Search starting')
  }
  return (
    <div>
      <form action='/' method='get' autoComplete='off' onSubmit={handleSubmit}>
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
