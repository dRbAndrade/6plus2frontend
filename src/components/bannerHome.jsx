import '../styles/bannerHome.scss'
import ButtonBlack from "./buttonBlack"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';

const BannerHome = ()=>{
       const navigate = useNavigate();
       return(
      
        <Container>
          <Row className="banner g-0 d-flex justify-content-between">
            <Col sm={6} className="bannerContent d-flex flex-column justify-content-center align-items-center">
                  <h1>O parceiro do seu melhor movimento</h1>
                  <p>Na 6pluS2store você encontra os melhores modelos das marcas mais inovadoras do mercado para que seu movimento nunca pare. Conheça nossa curadoria de produtos exclusivos e aproveite nossas ofertas.</p>
                
                  <div className="buttonBanner"><ButtonBlack buttonLink="/products" handleSubmit={()=>navigate("/products")}>Ver produtos</ButtonBlack></div>                            
            </Col>
            <Col sm={6} className="imgBox">
            </Col>               
        </Row>       
        </Container>
       )

}

export default BannerHome