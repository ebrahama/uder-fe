import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'
const Header = () => {

  return (
    <div className='conta'>
      <h1>uder</h1>
      <div className='ser'>
        <input></input>
        <button>sert</button>
      </div>
      <Link to ="/sell"><button>seller</button></Link>
      
    </div>
  );
};

export default Header;