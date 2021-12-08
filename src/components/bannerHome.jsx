import '../styles/bannerHome.scss'
import ButtonBlack from "./buttonBlack"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import { useNavigate } from 'react-router';

const BannerHome = ()=>{
       const navigate = useNavigate();
       return(
              <>
              <Container className="banner d-flex justify-content-between">
                     
                     <Col sm={6} className="bannerContent d-flex flex-column justify-content-center align-items-center">
                            <h1>O parceiro do seu melhor movimento</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="buttonBanner"><ButtonBlack buttonLink="/products" handleSubmit={()=>navigate("/products")}>Ver produtos</ButtonBlack></div>                            
                     </Col>
                     <Col sm={6} className="imgBox" style={{backgroundImage: `url(https://i.imgur.com/jTtnqmB.png)`}}>
                        
                     </Col>
                     
              </Container>
                                    
                     
              </>
       )

}

export default BannerHome