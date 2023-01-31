import React from 'react'
import './styles.scss'
import NavPageButton from './NavPageButton';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>MYDEMO SINGLE SPA</h1>
      </div>
      <div className="nav_button__container">
        <NavPageButton link="home">Home</NavPageButton>
        <NavPageButton link="page-1">Page 1</NavPageButton>
        <NavPageButton link="page-2">Page 2</NavPageButton>
      </div>
    </div>
  )
}

export default Nav;
