import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "../styles/cart-product.scss"
import { useEffect, useState } from "react";

const CartProduct = ({product,updateCart,remove,size})=>{

  const {title,price,image} = product;
  const [quantity,setQuantity] = useState(1);
  const [totalPrice,setTotalPrice] = useState(quantity*price);
  useEffect(()=>{
    setTotalPrice(quantity*price);
  },[quantity,price,totalPrice]);
  
  function updateQuantity(event){
    if(event.target.id==="minus"&&quantity>1)setQuantity(quantity-1);
    if(event.target.id==="plus")setQuantity(quantity+1);
    setTimeout(()=>{
      updateCart();
    },50)
      
  }
  return(
    <Row className="product-row d-flex g-0 py-5">
      <Col xs={6} md={3} className="d-flex pl-10 align-items-center justify-content-start">
        <img src={image} alt="Product"/>
      </Col>
      <Col xs={{span:5,offset:1}} sm={{span:6,offset:0}} md={9} className="d-flex p-10 flex-row align-items-center justify-content-between ">
        <Row className="g-0 d-flex h-100 info-product-cart">
          <Col>
            <p className="cart-title">{title}</p>
            <p className="cart-product-size">Tamanho: {size}</p>
          </Col>
          <Col className="align-items-center justify-content-center unit-value-cart ">R$ {price.toFixed(2)}</Col>
          <Col className="d-flex align-items-center justify-content-start">
            <button id="minus" onClick={updateQuantity}>—</button>
            <span>{quantity} PAR</span>
            <button id="plus" onClick={updateQuantity}>+</button>
          </Col>
          
          <Col className=" d-flex align-items-center justify-content-start total-price">R$ {totalPrice.toFixed(2)}</Col>
          <Col className="d-flex align-items-center justify-content-start"><button onClick={()=>remove(product.title+size)}>Remover</button></Col>
          
        </Row>
      </Col>
      
    </Row>
  )

}

export default CartProduct;