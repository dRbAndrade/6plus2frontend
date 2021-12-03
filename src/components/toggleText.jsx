import '../styles/toggleText.scss'
import React,{useState} from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";


const ToggleText = ({toggle})=>{

  const [show, setShow] = useState(false)
  return(
    <>
    <Container className="toggler">
        <Row className="toggleShow justify-content-between">
          <Col className="d-flex align-items-center justify-content-between">
            <h2 className="toggleTitle ">{toggle.title}</h2>
            <button onClick={() =>setShow(!show)}> { show ? <BsDashLg /> : <BsPlusLg /> } </button>
          </Col>
          
        </Row>
          <p className="toggleDescription">
              {
                show ? toggle.description : null
              }
          </p>
    </Container>  
    </>
  )

}

export default ToggleText;