import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import CartProduct from '../components/cart-product'
import '../styles/cart.scss'
import {useEffect, useState } from 'react';
import axios from 'axios';

const Cart = ()=>{

  const [total,setTotal] = useState(0);
  const [products,setProducts] = useState([])


  async function fetchProducts(){
    let products = (await axios.get("http://localhost:8080/products")).data.content;
    setProducts(products);
  }
  useEffect(()=>{
    fetchProducts();
  },[])


  useEffect(()=>{
    updateTotal()
  },[products])

  function remove(id){
    const newArray = products.filter(e=>e.id!==id);
    setProducts(newArray)
  }
  function updateTotal(){
    const itemsPrices = document.querySelectorAll(".total-price");
    let subtotal = 0;
    itemsPrices.forEach(e=>subtotal+=parseFloat(e.textContent))
    setTotal(subtotal)
  }  

  return(
    <>
      <Helmet>
        <title>Carrinho | 6pluS2store</title>
      </Helmet>
      <Header/>
      <main>
        <Container fluid className="cart-header d-flex justify-content-between mb-5 g-0">
          <h1>Carrinho</h1>
          <Link to="/products"> (MALU, ICON AQUI) Continuar comprando</Link>
        </Container>
        <Row className="product-header mb-3 g-2">
            <Col md={{span:4}}>Produto</Col>
            <Col className="d-flex justify-content-center" md={{span:2}}>Preço</Col>
            <Col className="d-flex justify-content-center" md={{span:2}}>Quantidade</Col>
            <Col className="d-flex justify-content-center" md={{span:2}}>Preço Total</Col>
        </Row>
        <Row className="cart-products-container mb-5">
          {products.map(product=>{
            return(
              <CartProduct key={product.id} product={product}
              updateCart={updateTotal} remove={remove}/>
            );
          })}
        </Row>
        <Row className="totals-container">
          <Col xs={12} sm={{span:8,offset:2}} md={{span:5,offset:7}} lg={{span:4,offset:8}} >
            <Row className="subtotal py-3 mb-4">
              <Col>Subtotal</Col>
              <Col className="d-flex justify-content-end">{`R$ ${total.toFixed(2)}`}</Col>
            </Row>
            <Row className="total mb-5">
              <Col>Total</Col>
              <Col className="d-flex justify-content-end">{`R$ ${total.toFixed(2)}`}</Col>
            </Row>
            <button style={{width:"100%"}}>fechar pedido</button>
          </Col>
        </Row>
      </main>
    </>
  );

}


export default Cart;