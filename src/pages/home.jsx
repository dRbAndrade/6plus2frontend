import "../styles/home.scss"
import Header from "../components/header"
import Carrossel from "../components/carrossel"
import Container from "react-bootstrap/Container"
import Helmet from 'react-helmet'
import Footer from "../components/footer"

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
      <Footer></Footer>
    </>
  )
}

export default Home;