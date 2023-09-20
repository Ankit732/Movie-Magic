import React, { useState } from 'react';
import "./Search.css";
import { useGlobalContext } from './context';

const Search = () => {
  const {inputs, setInputs,isError} = useGlobalContext();
  
  const handleChange = (e) => {
  
    setInputs(e.target.value);
  }

  return (
    <div className='search-bar'>
      <h4 className='search'>Search your Favorite Movie</h4>
      <input
        placeholder='GodFather'
        className='bar'
        value={inputs}
        onChange={handleChange}
      />
      
    </div>
  );
}



export { Search };
