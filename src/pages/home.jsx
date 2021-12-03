import "../styles/home.scss"
import Header from "../components/header"
import Carrossel from "../components/carrossel"
import BannerHome from "../components/bannerHome"
import Row from "react-bootstrap/Row"
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
        <BannerHome></BannerHome>
        {shouldCarrossel&&
          <Row className="p-0 d-flex justify-content-center">
            <Carrossel></Carrossel>
          </Row>}
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home;