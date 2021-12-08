import ToggleText from "../components/toggleText"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import "../styles/product.scss"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import ProductSizes from "../components/product-sizes"
import { Helmet } from "react-helmet"
import Breadcrumb from "../components/breadcrumb"
import Footer from "../components/footer"

import Swal from "sweetalert2"



const Product  = ()=>{
 
  const [toggles,setToggles] = useState({}) 
  const [product,setProduct] = useState({})
  const {id} = useParams();
  function addToCart(){
    const chosenSize = document.querySelector(".product-size.selected").textContent;
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if(!cartItems){
      localStorage.setItem("cartItems",JSON.stringify([{"product":product,"size":chosenSize}]))
    }else{
      if(cartItems.filter(e=>{
        return JSON.stringify(e.product)===JSON.stringify(product) && chosenSize===e.size
      }).length>0){
        Swal.fire({
          icon:"info",
          title:"Item já adicionado ao carrinho"
        });
      }else{
        cartItems.push({"product":product,"size":chosenSize})
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
      }
      console.log(cartItems);
    }
  }
  async function fetchProduct(id){
    let product = (await axios.get(`http://localhost:8080/products/${id}`)).data;
    setProduct(product);
    return product;
  }

  useEffect(()=>{
    fetchProduct(id).then(response => setToggles(
        [
          {
            title: "Descrição",
            description: response.description
          }, 
          {
            title: "Política de troca",
            description: "Nosso prazo para devolução ou troca é de até 30 dias da data de recebimento em seu local de entrega."
          }
      
        ]
    ));
    
  
  },[id])
  return(

    <>
      <Helmet><title>{`${product.title}`} | 6pluS2store</title></Helmet>
      <div>
      <Header/>
      <main>
        <Container>
          
          <Row className="g-0 mb-5 d-flex justify-content-between">          
            
            <Col className="d-flex g-0 justify-content-start align-items-start" md={{span:6}} lg={{span:6}}>
              <img className="product-image" src={product.image} alt="Product" />
            </Col>
            <Col className="d-flex g-0" md={{span:5}} lg={{span:5}}>
              <Card className="product-info g-0 justify-content-start">
              <Breadcrumb names={["Produtos",product.title]} links={["/products",`/products/${product.id}`]}/>
                <Row className="g-0">

                  <span className="category">{product.category}</span>
                  <Card.Title className="mb-3 g-0">{product.title}</Card.Title>
                  <Card.Subtitle className="pb-3 mb-4 g-0">{`R$ ${product.price}`} <span>{`ou até 12x de R$ ${(product.price / 12).toFixed(2)} sem juros`}</span></Card.Subtitle>
                  <Card.Text>Selecione o tamanho</Card.Text>
                </Row>
                <Row className="g-0 gap-3">
                  <Row className="g-0"><ProductSizes product={product}/></Row>
                  <Row className="g-0">
                    <ButtonBlack handleSubmit={addToCart}>Adicionar ao carrinho</
                    ButtonBlack>
                  </Row>
                  <Row>
                      <ToggleText toggle={toggles[0]}></ToggleText>
                      <ToggleText toggle={toggles[1]}></ToggleText>
                  </Row>
                </Row>
              </Card>
            </Col>
          </Row>
          
        </Container>
      </main>
      </div>
      <footer></footer>
    </>
    )

}

export default Product;


