import { useState, useEffect, useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../styles/carrossel.scss'
import CardProduct from './cardProduct'
import { useNavigate } from 'react-router'
import {BsChevronRight} from 'react-icons/bs'
import {ProductContext} from '../contexts/ProductContext'

const Carrossel = ({pages}) => {

  const {products} = useContext(ProductContext);
  const [view,setView] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    if(products.length>0){
      let counter = 0;
      const pagesArray = [];
      let pageItems = 1;
      if(pages===3) pageItems = 2;
      if(pages===2) pageItems = 3;
      for(let i=0;i<pages;i++){
        pagesArray.push([]);
        for(let j=0;j<pageItems;j++){
          pagesArray[i].push(products[counter]);
          counter++;
        }
      }
      setView(pagesArray)
    }
  },[pages, products])
  return (

    <> 
      <Carousel className="g-0" variant="dark">
        {view&&view.map((e,indx)=>(
          <Carousel.Item key={indx}interval={6000}>
            <Row className="gap-5 g-0">
              {e&&e.map(product=>(
                <Col className="d-flex g-0 justify-content-center" key={product.id}>
                  <CardProduct handleButton={()=>navigate(`/products/${product.id}`)}
                    product={product} buttonIcon={<BsChevronRight className="arrowRight"/>}/>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>

  )

}

export default Carrossel;

