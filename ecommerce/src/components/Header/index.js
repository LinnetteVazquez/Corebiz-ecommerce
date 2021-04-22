// import React from 'react';
import './index.css'
//img
import logo from "../../img/logo.png";

//componets




function Header({cartProducts, removeCartProduct}) {
    return <header className='header'>
       <img className='logo' src={logo} alt="logo-corebiz" />
        <div className='search'>
        <input className='input'type="text" placeholder="¿Qué estas buscando?" />
        <i class="fas fa-search"></i>
        </div>
        <div className='user'>
            <i class="far fa-user"></i>
            <p>Mi Cuenta</p>
        </div>
        <div className='shopping' onClick= {removeCartProduct}>
            <i class="fas fa-shopping-cart"></i>
           <p>{cartProducts}</p>
        </div>
    </header>
}

export default Header;