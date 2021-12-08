import axios from "axios";
import Col from "react-bootstrap/Col"
import { useEffect, useState } from "react";
import "../styles/product-sizes.scss"

const ProductSizes = ({product})=>{

  const [sizes,setSizes] = useState([]);

  useEffect(()=>{
    if(product.id)
      axios.get(`http://localhost:8080/products/${product.id}/sizes`)
        .then(response=>{
          setSizes(response.data)
        })
  },[product])
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
        <>
        <button id={size} onClick={handleButton} className="product-size">{size}</button>
        </>

      ))}
      
    </Col>
    <span>Guia de medidas</span>
    </>
  )

}


export default ProductSizes;