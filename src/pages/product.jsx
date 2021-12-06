import ToggleText from "../components/toggleText"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Swal from "sweetalert2"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import "../styles/product.scss"
import ButtonBlack from "../components/buttonBlack"
import Container from "react-bootstrap/Container"
import ProductSizes from "../components/product-sizes"
import { Helmet } from "react-helmet"
import Breadcrumb from "../components/breadcrumb"

const toggles = [
  {
  title: "Descrição",
  description: "Vai puxar do back"
  },
  {
  title: "Política de troca",
  description: "A 6pluS2store utiliza tecnologia de ponta para a fabricação de seus produtos, primando pela qualidade e satisfação de seus clientes. Pelo respeito e para que seja mantida a credibilidade conquistada junto aos seus consumidores, a empresa criou uma política de troca e devolução de acordo com o Código de Defesa do Consumidor, e preocupada para que você (cliente) obtenha uma negociação eficaz, ágil e principalmente satisfatória. Caso opte pelo contato via correio eletrônico ou telefônico, será encaminhado a você o formulário para preenchimento e envio junto à(s) peça(s). O produto devolvido sem esse formulário e/ou sem a comunicação ao SAC será reenviado sem consulta prévia. Ao efetuar o processo de devolução/troca o cliente deverá no verso da nota fiscal a ser devolvida/trocada, informar o motivo da devolução/troca, o nome de quem está devolvendo, CPF e a data da devolução."
  }
]


const Product  = ()=>{
 
  const [product,setProduct] = useState({})
  const {id} = useParams();
  function addToCart(){
    Swal.fire({
      title:"Not implemented yet",
      icon:"information"
    })
  }
  async function fetchProduct(id){
    let product = (await axios.get(`http://localhost:8080/products/${id}`)).data;
    setProduct(product);
  }

  useEffect(()=>{
    fetchProduct(id);
  },[id])
  return(

    <>
      <Helmet><title>{`${product.title}`} | 6pluS2store</title></Helmet>
      <Header/>
      <main>
        <Container>
          <Breadcrumb names={["Produtos",product.title]} links={["/products",`/products/${product.id}`]}/>
          <Row className="g-0 mb-5">
            <Col className="d-flex g-0" md={{span:5,offset:1}} lg={{span:5,offset:1}}>
              <Card className="product-info g-0 justify-content-between">
                <Row className="g-0">
                  * * * * * 2 Availações (Ainda por implementar)
                  <Card.Title className="mb-3 g-0">{product.title}</Card.Title>
                  <Card.Subtitle className="pb-3 mb-4 g-0">{`R$ ${product.price}`}|<span className="text-muted">{`R$ ${product.price}`}</span></Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                </Row>
                <Row className="g-0 gap-3">
                  <Row className="g-0"><ProductSizes product={product}/></Row>
                  <Row className="g-0">
                    <ButtonBlack handleSubmit={addToCart}>Adicionar ao carrinho</
                    ButtonBlack>
                  </Row>
                </Row>
              </Card>
            </Col>
            <Col className="d-flex g-0" md={{span:5,offset:1}} lg={{span:4,offset:1}}>
              <img className="product-image" src={product.image} alt="Product" />
            </Col>
          </Row>
          <ToggleText toggle={toggles[1]}></ToggleText>
        </Container>
      </main>
    </>
    )

}

export default Product;


