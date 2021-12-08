import Col from "react-bootstrap/Col"
import { useEffect, useState } from "react";
import "../styles/product-sizes.scss"

const ProductSizes = ({id,productSizes})=>{

  const [sizes,setSizes] = useState([]);

  useEffect(()=>{
    setSizes(productSizes.filter(e=>e.productId===parseInt(id)).map(e=>e.size))
  },[id,productSizes])

  function handleButton(event){
    event.preventDefault();
    let buttons = document.querySelectorAll(".product-size");
    buttons = Array.from(buttons).filter(e=>e.id!==event.target.id);
    const targetButton = document.getElementById(event.target.id);
    buttons.forEach(button=>button.classList.remove("selected"))
    targetButton.classList.toggle("selected")
  }

  return (
    <>
      <Col className="g-0 d-flex justify-content-start sizes">
      {sizes.map(size=>(
        <button key={size} id={size} onClick={handleButton} className="product-size">{size}</button>
      ))}
      
    </Col>
    <span>Guia de medidas</span>
    </>
  )

}


export default ProductSizes;