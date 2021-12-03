import "../styles/home.scss"
import Header from "../components/header"
import Carrossel from "../components/carrossel"
import Container from "react-bootstrap/Container"
import {Helmet} from "react-helmet";

const Home = () => { 
  return(
    <>
      <Helmet>
        <title>6pluS2store</title>
      </Helmet>
      <Header></Header>
      <main>
        <Container fluid>
            <Carrossel></Carrossel>          
        </Container>
      </main>
    </>
  )
}

export default Home;