import { useState, useEffect, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../styles/carrossel.scss'
import CardProduct from './cardProduct'
import { useNavigate } from 'react-router'
import {BsChevronRight} from 'react-icons/bs'
import {ProductContext} from '../contexts/ProductContext'

const Carrossel = () => {

  const {products} = useContext(ProductContext);
  const [view,setView] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(products.length>0)
      setView(
        [
          [products[0],products[1],products[2]],
          [products[3],products[4],products[5]]
        ]
      )
  },[products])
  return (
      <Carousel className="g-0" variant="dark">

        <Carousel.Item interval={6000}>
          <Row className="gap-5 g-0">
            {view&&view[0].map(product=>(
              <Col className="d-flex g-0 justify-content-center" key={product.id}>
                <CardProduct handleButton={()=>navigate(`/products/${product.id}`)}
                  product={product} buttonIcon={<BsChevronRight className="arrowRight"/>}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

        <Carousel.Item interval={6000}>
          <Row className="gap-5 g-0">
            {view&&view[1].map(product=>(
              <Col className="d-flex g-0 justify-content-center" key={product.id}>
                <CardProduct handleButton={()=>navigate(`/products/${product.id}`)}
                  product={product} buttonIcon={<BsChevronRight className="arrowRight"/>}/>
              </Col>
            ))}
          </Row>
        </Carousel.Item>

      </Carousel>
  )

}

export default Carrossel;

