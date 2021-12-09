import { Container } from "react-bootstrap";
import "../styles/measurement-guide.scss";
import {BsXLg} from 'react-icons/bs'
import "../styles/modeloTabela.scss"


const MeasurementGuide = ()=>{

  function closeModal(){
    document.querySelector(".measurement-modal").classList.toggle("show");
    document.querySelector(".fade-mask").classList.toggle("show");
  }

  return(
    <Container className="measurement-modal">
      <button className="measurement-icon" onClick={closeModal}><BsXLg/></button>
      <table>
      <thead>
        <tr>
          <th colSpan="6">Guia de Medidas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>34</td>
          <td className="grey">36</td>
          <td>38</td>
          <td className="grey">40</td>
          <td>42</td>
          <td className="grey">44</td>
        </tr>
        <tr>
          <td>22.5 cm</td>
          <td className="grey">23.5 cm</td>
          <td>24.5 cm</td>
          <td className="grey">26 cm</td>
          <td>27 cm</td>
          <td className="grey">28 cm</td>
        </tr>
      </tbody>
    </table>
    </Container>
  )

}

export default MeasurementGuide;