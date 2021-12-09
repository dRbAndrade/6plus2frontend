import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import "../styles/breadcrumb.scss"

const Breadcrumb = ({names,links})=>{
  
  return(
    <>
    <Row className="g-0 breadcrumb">
      <Col>
        <Link to="/">Home</Link>
        {names&&names.map((name,index)=>{
        return <Link key={name?name:index} to={links[index]}> / {name}</Link>
        })}
      </Col>
    </Row>
    </>
  )

}

export default Breadcrumb;