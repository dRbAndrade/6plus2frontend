import { Container } from "react-bootstrap";
import "../styles/measurement-guide.scss";
import {BsXLg} from 'react-icons/bs'


const MeasurementGuide = ()=>{

  function closeModal(){
    document.querySelector(".measurement-modal").classList.toggle("show");
    document.querySelector(".fade-mask").classList.toggle("show");
  }

  return(
    <Container className="measurement-modal">
      <button className="measurement-icon" onClick={closeModal}><BsXLg/></button>
    </Container>
  )

}

export default MeasurementGuide;