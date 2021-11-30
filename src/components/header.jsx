import '../styles/header.scss'
import { Link, NavLink } from 'react-router-dom';
const Header = ()=>{

  return(
    <>
    <div className="free-delivery">
      FRETE GRÁTIS NAS COMPRAS ACIMA DE R$399
    </div>
    <header className="header">
      <Link to="/" className="logo">6pluS2store</Link>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/#about">Sobre</NavLink>
      </nav>
      <Link to="/carrinho" className="cart">Carrinho</Link>
    </header>
    </>
  )

}

export default Header;