import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../styles/carrossel.scss'
import CardProduct from './cardProduct'
import axios from 'axios'
const Carrossel = () => {

  const [productsPage1,setProductsPage1] = useState([])

  async function fetchProducts(setProducts, page){
    let products = (await axios.get(`http://localhost:8080/products?size=3&page=${page}`)).data.content;
    setProducts(products);
  }
  useEffect(()=>{
    fetchProducts(setProductsPage1,0);
  },[])
  return (
      <Carousel variant="dark">

        <Carousel.Item interval={6000}>
          <Row className="gap-5">
            {productsPage1.map(product=>(
              <Col className="d-flex g-0 justify-content-center" key={product.id}><CardProduct product={product}></CardProduct></Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={6000}>
          <Row className="gap-5">
            {productsPage1.map(product=>(
              <Col className="d-flex g-0 justify-content-center" key={product.id}><CardProduct product={product}></CardProduct></Col>
            ))}
          </Row>
        </Carousel.Item>

      </Carousel>
  )

}

export default Carrossel;

