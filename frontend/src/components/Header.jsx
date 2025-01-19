import React from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL

const Header = () => {
  return (
    <div>
      <h1><a href={BASE_URL} className='header'>pollmaker</a></h1>
    </div>
  )
}

export default Header
