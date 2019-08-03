import React from 'react';
import logoImage from'./img/logo-docplanner.svg'
import './docheader.css';
import NavMenu from './navmenu.js'



const DocHeader = (props) =>
<header class="nav-header">
  <img class="logo-docplanner" src={logoImage} alt="Docplanner Group"/>
  <NavMenu/>
</header>

function Header() {
  return (
    <DocHeader/>
  );
}

export default Header;
