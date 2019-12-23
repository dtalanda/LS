import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';


const App = () => {

  return (
    <div className='menu'>
      <Link to={'/dragndrop'}><button className='menu__item'>Drag and Drop</button></Link>
      <Link to={'/maze'}><button className='menu__item'>Maze Game</button></Link>
      <Link to={'/memory'}><button className='menu__item'>Memory Game</button></Link>
      <Link to={'/robot'}><button className='menu__item'>Robot Game</button></Link>
      <Link to={'/bingo'}><button className='menu__item'>Bingo Game</button></Link>
      <Link to={'/matchit'}><button className='menu__item'>Match It Game</button></Link>
      <Link to={'/oneortwo'}><button className='menu__item'>One or Two</button></Link>
    </div>    
  );
}

export default App;
