import React from 'react';
import {setSearchFields } from '../actions/index';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchFields(e.target.search.value));
}
  return (
    <form class="search-form" onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Search..." />
      <button type="submit" class="search-button active"><svg height="32" width="32"><path d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" fill="#ffffff" fill-rule="evenodd"></path></svg></button>
    </form>
  );
};

export default SearchBox;