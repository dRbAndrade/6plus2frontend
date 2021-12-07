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
    <Row className="product-row g-0 py-5">
      <Col className="d-flex align-items-center justify-content-center"><img src={image} alt="Product"/></Col>
      <Col className="d-flex align-items-center">
        <Row className="align-items-end h-100 g-0">
          <div>{title}</div>
          <div className="cart-product-size">{size}</div>
        </Row>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">R$ {price.toFixed(2)}</Col>
      <Col className="d-flex align-items-center justify-content-center">
          <button id="minus" onClick={updateQuantity}>-</button>
          <span>{quantity}</span>
          <button id="plus" onClick={updateQuantity}>+</button>
      </Col>
      <Col className=" d-flex align-items-center justify-content-center total-price">R$ {totalPrice.toFixed(2)}</Col>
      <Col className="d-flex align-items-center justify-content-center"><button onClick={()=>remove(product.title+size)}>Remover</button></Col>
    </Row>
  )

}

export default CartProduct;