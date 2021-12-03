import "../styles/home.scss"
import Header from "../components/header"
import Helmet from "react-helmet"
import Carrossel from "../components/carrossel"
import Container from "react-bootstrap/Container"
import {Helmet} from "react-helmet";

const shouldCarrossel = window.innerWidth>600?true:false
const Home = () => { 
  return(
    <>
      <Helmet>
        <title>6pluS2store</title>
      </Helmet>
      <Header></Header>
      <main>
        {shouldCarrossel&&
          <Container className="d-flex justify-content-center">
            <Carrossel></Carrossel>
          </Container>}

      </main>
    </>
  )
}

export default Home;