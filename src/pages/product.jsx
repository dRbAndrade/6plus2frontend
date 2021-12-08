import ToggleText from "../components/toggleText"
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
import { CartContext } from "../contexts/CartContext"
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

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
 
  const [view,setView] = useState()
  const {products,productSizes} = useContext(ProductContext);
  const {id} = useParams();
  const {addItem} = useContext(CartContext);


  useEffect(()=>{
    setView(products.filter(e=>e.id===parseInt(id))[0]);
  },[id,products])
  return(

    <>
      <Helmet><title>{`${view&&view.title}`} | 6pluS2store</title></Helmet>
      <div>
      <Header/>
      <main>
        <Container>
          
          <Row className="g-0 mb-5 d-flex justify-content-between">          
            
            <Col className="d-flex g-0 justify-content-start align-items-start" md={{span:6}} lg={{span:6}}>
              <img className="product-image" src={view&&view.image} alt="Product" />
            </Col>
            <Col className="d-flex g-0" md={{span:5}} lg={{span:5}}>
              <Card className="product-info g-0 justify-content-start">
              <Breadcrumb names={["Produtos",(view&&view.title)]} links={["/products",`/products/${view&&view.id}`]}/>
                <Row className="g-0">

                  <span className="category">{view&&view.category}</span>
                  <Card.Title className="mb-3 g-0">{view&&view.title}</Card.Title>
                  <Card.Subtitle className="pb-3 mb-4 g-0">{`R$ ${view&&view.price}`} <span>{`ou até 12x de R$ ${(view&&view.price / 12)} sem juros`}</span></Card.Subtitle>
                  <Card.Text>Selecione o tamanho</Card.Text>
                  <Card.Text>{view&&view.description}</Card.Text>
                </Row>
                <Row className="g-0 gap-3">
                  <Row className="g-0"><ProductSizes id={id} productSizes={productSizes}/></Row>
                  <Row className="g-0">
                    <ButtonBlack handleSubmit={()=>addItem(view)}>Adicionar ao carrinho</
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


