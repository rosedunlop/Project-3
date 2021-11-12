import React from 'react'
// import { Link } from 'react-router-dom'
// import SearchResults from '../pages/SearchResults'

const Search = () => {
  // const { search } = window.location
  // const query = new URLSearchParams(search).get('search')
  // const [clicked, setClicked] = useState(false)
  // const [submit, setSubmit] = useState(false)

  // const handleSubmit = () => setSubmit(true)

  return (
    <form>
      <input
        type='text'
        id='header-search'
        placeholder='search recipes'
        name='search'
      ></input>
      <button type='submit' value=''>
        search
      </button>
    </form>
  )
}

export default Search
