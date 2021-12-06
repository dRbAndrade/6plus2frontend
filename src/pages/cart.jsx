import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Header from '../components/header';
import CartProduct from '../components/cart-product'
import '../styles/cart.scss'
import {useEffect, useState } from 'react';
import ButtonBlack from '../components/buttonBlack';
import { BsChevronLeft } from "react-icons/bs";
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from '../components/footer';

const Cart = ()=>{

  const [total,setTotal] = useState(0);
  const [products,setProducts] = useState([])
  const navigate = useNavigate();
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

  function handleSubmit(){
    Swal.fire({
      icon:'success',
      html:
      `
      <h1 style="font-size:2rem">Obrigado por comprar conosco!<h1/>
      <div style="text-align:left;font-size:1.5rem">
        Você será redirecionado à home.
      </div>`,
      timer:2000
    })
    setTimeout(()=>{
      navigate("/");
    },2000)
  }
  function remove(id){
    const newArray = products.filter(e=>e.id!==id);
    setProducts(newArray)
  }
  function updateTotal(){
    const itemsPrices = document.querySelectorAll(".total-price");
    let subtotal = 0;
    itemsPrices.forEach(e=>{
      subtotal+=parseFloat(e.textContent.substring(3));
    })
    setTotal(subtotal)
  }  

  return(
    <>
      <Helmet>
        <title>Carrinho | 6pluS2store</title>
      </Helmet>
      <Header/>
      <main>
        <Container>
          <Row className="cart-header">
            <Col className="d-flex justify-content-between mb-5 g-0">
              <h1>Carrinho</h1>
              <Link to="/products"> {<BsChevronLeft/>} Continuar comprando</Link>
            </Col>
          </Row>
        <Row className="product-header g-2">
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
              <Col className="d-flex justify-content-end">R$ {total.toFixed(2)}</Col>
            </Row>
            <Row className="total mb-5">
              <Col>Total</Col>
              <Col className="d-flex justify-content-end">R$ {total.toFixed(2)}</Col>
            </Row>
            <Row>
              <ButtonBlack handleSubmit={handleSubmit}>Fechar Pedido</ButtonBlack>
            </Row>
          </Col>
        </Row>
        </Container>
      </main>
      <Footer/>
    </>
  );

}


export default Cart;