import React from 'react'
import { Link } from 'react-router-dom'
import SearchResults from '../pages/SearchResults'

const Search = () => {
  const { search } = window.location
  const query = new URLSearchParams(search).get('search')
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked()

  return (
    <form>
      <input
        type='text'
        id='header-search'
        placeholder='search recipes'
        name='search'
      ></input>
      {/* {(!clicked) ? } */}
      <Link to={SearchResults} query={query}>
        <button type='submit' onClick={handleClick}>
          search
        </button>
      </Link>
    </form>
  )
}

export default Search
