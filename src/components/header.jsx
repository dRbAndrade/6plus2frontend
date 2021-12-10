import '../styles/header.scss'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import ButtonBlack from './buttonBlack';
import {BsCartFill} from 'react-icons/bs'
import {BsList} from 'react-icons/bs'
import {BsXLg} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';


const Header = ()=>{

  const [collapsed] = useState(window.innerWidth<600?false:true);
  const {cartItems} = useContext(CartContext);  

  const navigate = useNavigate();

  useEffect(()=>{
    if(cartItems.length>0){
      const cartCounter = document.querySelector(".header .collapsed .counter");
      cartCounter.classList.add("show");
    }
  },[cartItems])

  const toggleMenu = ()=>{
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
        <button className={`menu ${!collapsed&&"collapsed"}`} onClick={toggleMenu}>
          <BsList/>
        </button>
        <Link to="/" className="logo">6pluS2store</Link>
        <nav className={`navbar ${!collapsed||"collapsed"}`}>
          <button className="close" onClick={toggleMenu}><BsXLg/></button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </nav>
        <div className="button-container">
          <ButtonBlack buttonLink="/cart" handleSubmit={()=>navigate("/cart")} className={`cart button ${!collapsed||"collapsed"}`}>
            <>
              Carrinho
              <span className="counter">{cartItems.length}</span>
            </>
          </ButtonBlack>
        </div>
        <Link to="/cart" className={`cart icon ${!collapsed&&"collapsed"}`}><span className="counter">{cartItems.length}</span><BsCartFill className=""/></Link>
      </header>
    </>
  )

}

export default Header;