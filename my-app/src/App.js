import React, { useState, useEffect } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';


const App = () => {

  return (
    <div className='menu'>
      <Link to={'/dragndrop'}><button className='menu__item'>Drag and Drop</button></Link>
      <Link to={'/maze'}><button className='menu__item'>Block Game</button></Link>
      <Link to={'/memory'}><button className='menu__item'>Memory Game</button></Link>
    </div>    
  );
}

export default App;
