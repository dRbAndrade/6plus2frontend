import '../styles/header.scss'
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Header = ()=>{

  const [collapsed,setCollapsed] = useState(window.innerWidth<600?false:true);

  window.addEventListener('resize',(event)=>{
    if(window.innerWidth>=600)setCollapsed(true);
    else setCollapsed(false);
  });

  useEffect(()=>{
    const menu = document.querySelector(".header .menu");
    const navbar = document.querySelector(".header .navbar");
    const cartButton = document.querySelector(".header .cart.button");
    const cartIcon = document.querySelector(".header .cart.icon");
    if(!collapsed){
      menu.classList.add("collapsed");
      navbar.classList.remove("collapsed");
      cartButton.classList.remove("collapsed");
      cartIcon.classList.add("collapsed");
    }else{
      menu.classList.remove("collapsed");
      navbar.classList.add("collapsed");
      cartButton.classList.add("collapsed");
      cartIcon.classList.remove("collapsed");
    }
  },[collapsed]);

  const toggleMenu = (event)=>{
    const navbar = document.querySelector(".header .navbar");
    const closeButton = document.querySelector(".navbar .close");
    navbar.classList.toggle("show");
    setTimeout(()=>{
      closeButton.classList.toggle("show");
    },500)
  }



  return(
    <>
      <div className="free-delivery">
        FRETE GRÁTIS NAS COMPRAS ACIMA DE R$399
      </div>
      <header className="header">
        <button className="menu collapsed" onClick={toggleMenu}>
          <i className="icon-menu"></i>
        </button>
        <Link to="/" className="logo">6pluS2store</Link>
        <nav className="navbar">
          <button className="close" onClick={toggleMenu}><i className="icon-close"></i></button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </nav>
        <Link to="/carrinho" className="cart button">Carrinho</Link>
        <Link to="/carrinho" className="cart icon collapsed"><i className="icon-cart"></i></Link>
      </header>
    </>
  )

}

export default Header;