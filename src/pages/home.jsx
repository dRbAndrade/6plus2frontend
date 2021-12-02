import "../styles/home.scss"
import Header from "../components/header"
import Carrossel from "../components/carrossel"
import Container from "react-bootstrap/Container"


const Home = () => {

  return (
    <>
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