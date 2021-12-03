import '../styles/bannerHome.scss'
import ButtonBlack from "./buttonBlack"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BsChevronRight } from "react-icons/bs";


const BannerHome = ()=>{
       return(
              <>
                <Row className="d-flex align-items-center justify-content-around">
                        <Col sm={{span: 4}} className="bannerContent">
                              <h1 className="bannerTitle">Grande título <br/>com frase de impacto</h1>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              <Container className="buttonBanner">
                                      <ButtonBlack>Ver coleção</ButtonBlack>
                              </Container>
                        </Col>
                        <Col sm={{span: 5}} className="bannerImg d-flex justify-content-end">
                              <img src="https://i.imgur.com/ft3BsID.png" alt="" />
                        </Col>
                </Row>                           
                     
              </>
       )

}

export default BannerHome