import React, { useRef } from 'react';

// Import createSearchParams
// Import useNavigate
/*18/ 19*/
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {

  // get navigate function
  /*18*/
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    // use createSearchParams
    /*19*/ 
    const query = createSearchParams(searchQuery);
    /*20*/
    navigate({
      pathname:'/search',
      /*search?name=fido*/
      search: `?${query}`
    });
    // imperatively redirect with useNavigate() returned function
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
