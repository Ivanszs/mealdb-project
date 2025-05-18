import React, { useState, useEffect, useRef } from 'react';

export default function SearchForm({ search, setSearch, handleSearch }) {

  const inputRef = useRef(null);

  const onSearch = (e) => {
    e.preventDefault();
    console.log(e)
    handleSearch(search);
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []); // empty dependency array to run only once

  return (
    <form onSubmit={onSearch} className="flex items-center">
      <input
        ref={inputRef}
        type="text"
        name='search'
        value={search}
        className="border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        placeholder="Search..."
        onInput={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSearch(search);
        }}
        type="submit"
        className="bg-green-800 text-white px-4 py-2 rounded-r hover:bg-green-900"
      >
        Search
      </button>
    </form>
  );
}
